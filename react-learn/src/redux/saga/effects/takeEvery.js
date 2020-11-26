import {fork} from "./fork";
import {take} from "./take";

export function takeEvery(actionType,generatorFunc,...args){
    return fork(function *(){
       while (true){
           const action = yield take(actionType);
           yield fork(generatorFunc,...args.concat(action));
       }
    });
}
