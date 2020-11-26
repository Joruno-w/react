import {pathToRegexp} from 'path-to-regexp';

export default function pathMatch(path,url,option = {}) {
    const keys = [];
    const reg = pathToRegexp(path,keys,option);
    const result = reg.exec(url);
    if (!result){
        return;
    }
    let execArray = Array.from(result);
    execArray = execArray.slice(1);
    const params = getParams(execArray,keys);
    return{
        isExact: result[0] === url,
        params,
        url: result[0],
        path,
    }
}

function getParams(group,keys){
    const obj = {};
    for (let i = 0;i < group.length;i ++){
        const value = group[i];
        const name = keys[i].name;
        obj[name] = value;
    }
    return obj;
}

