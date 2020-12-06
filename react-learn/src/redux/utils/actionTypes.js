function getRandomStr(length){
    return Math.random().toString(36).substr(2,length).split("").join(".");
}

export default {
    INIT(){
        return `@@reduxINIT${getRandomStr(6)}`;
    },
    UNKNOWN(){
        return `@@redux/PROBE_UNKNOWN_ACTION${getRandomStr(6)}`;
    }
}