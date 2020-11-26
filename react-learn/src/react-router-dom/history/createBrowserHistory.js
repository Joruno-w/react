import ListenerManager from "./ListenerManager";
import BlockManager from "./BlockManager";

export default function createBrowserHistory(options = {}) {
    const {
        basename = "",
        forceRefresh = false,
        keyLength = 6,
        getUserConfirmation = (msg, callback) => callback(window.confirm(msg))
    } = options;
    const historyObj = {
        action: 'POP',
        go,
        goBack,
        goForward,
        push,
        replace,
        listen,
        block,
        createHref,
        length: window.history.length,
        location: createLocation(basename),
    };
    const listenerManager = new ListenerManager();
    const blockManager = new BlockManager(getUserConfirmation);
    function go(n) {
        window.history.go(n);
    }

    function goForward() {
        window.history.forward();
    }

    function goBack() {
        window.history.back();
    }

    function push(path, state) {
        changePage(path, state, true);
    }

    function replace(path, state) {
        changePage(path, state, false);
    }

    function listen(listener) {
        return listenerManager.addListener(listener);
    }

    function block(prompt){
        return blockManager.addBlock(prompt);
    }

    window.onpopstate = function () {
        const location = createLocation(basename);
        const action = 'POP';
        blockManager.triggerBlock(location,action,()=>{
            listenerManager.triggerListeners(location, "POP");
            historyObj.location = location;
        });
    }

    function createHref(location) {
        let {pathname='/',search='',hash=""} = location;
        return basename + pathname + search + hash;
    }

    function changePage(path, state, isPush) {
        const pathInfo = handlePathAndState(path, state, basename);
        let action = "PUSH";
        if (!isPush){
            action = 'REPLACE';
        }
        const location = createLocationFromPath(pathInfo,basename);
        blockManager.triggerBlock(location,action,()=>{
            if (isPush) {
                window.history.pushState({
                    key: createKey(keyLength),
                    state: pathInfo.state
                }, null, pathInfo.path);
            } else {
                window.history.replaceState({
                    key: createKey(keyLength),
                    state: pathInfo.state
                }, null, pathInfo.path);
            }
            listenerManager.triggerListeners(location, action);
            historyObj.location = location;
            historyObj.action = action;
            if (forceRefresh) {
                window.location.href = pathInfo.path;
            }
        });
    }
    return historyObj;
}

function handlePathAndState(path, state, basename) {
    if (typeof path === "string") {
        return {
            path,
            state
        }
    } else if (typeof path === "object") {
        let result = basename + path.pathname;
        let {search = "", hash = ""} = path;
        if (search.charAt(0) !== '?' && search.length > 0) {
            search = "?" + search;
        }
        if (hash.charAt(0) !== '#' && hash.length > 0) {
            hash = "#" + hash;
        }
        result += search;
        result += hash;
        return {
            path: result,
            state: path.state,
        }
    }
}

function createLocation(basename = "") {
    let {pathname, search, hash} = window.location;
    const reg = new RegExp(`^${basename}`);
    pathname = pathname.replace(reg);
    const location = {
        hash,
        pathname,
        search,
    };
    let state, historyState = window.history.state;
    if (historyState == null) {
        state = undefined;
    } else if (typeof historyState !== "object") {
        state = historyState;
    } else {
        if ("key" in historyState) {
            location.key = historyState.key;
            state = historyState.state;
        } else {
            state = historyState;
        }
    }
    location.state = state;
    return location;
}

function createLocationFromPath(pathInfo,basename) {
    let pathname = pathInfo.path.replace(/[?#].*$/,"");
    const reg = new RegExp(`^${basename}`);
    pathname = pathname.replace(reg);
    const queryIndex = pathInfo.path.indexOf("?");
    const sharpIndex = pathInfo.path.indexOf("#");
    let search,hash;
    if (queryIndex === -1 || queryIndex > sharpIndex){
        search = "";
    }else{
        if (sharpIndex === -1){
            search = pathInfo.path.substring(queryIndex);
        }else{
            search = pathInfo.path.substring(queryIndex,sharpIndex);
        }
    }
    hash = pathInfo.path.substring(sharpIndex);
    return{
        hash,
        pathname,
        search,
        state: pathInfo.state,
    }
}

function createKey(keyLength) {
    return Math.random().toString(36).substr(2, keyLength);
}