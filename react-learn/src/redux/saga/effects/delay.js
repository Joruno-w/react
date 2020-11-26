import {call} from "./call";

export function delay(duration,arg) {
    return call(function () {
        return new Promise(resolve => {
            setTimeout(()=>{
                resolve(arg || true);
            },duration);
        });
    });
}
