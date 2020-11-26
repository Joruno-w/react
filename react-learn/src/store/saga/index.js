import {delay, put, select} from "../../redux/saga/effects";

function mock(args) {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(args);
        },1000);
    });
}
export default function *(){
    yield delay(1000);
}