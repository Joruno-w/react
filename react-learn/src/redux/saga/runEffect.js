import {effectTypes} from "./effectHelper";
import {runCallEffect} from "./effects/call";
import {runPutEffect} from "./effects/put";
import {runSelectEffect} from "./effects/select";
import {runTakeEffect} from "./effects/take";
import {runForkEffect} from "./effects/fork";
import {runCancelEffect} from "./effects/cancel";
import {runAllEffect} from "./effects/all";
export default function (env,effect,next) {
    switch (effect.type) {
        case effectTypes.CALL:
            runCallEffect(env,effect,next);
            break;
        case effectTypes.PUT:
            runPutEffect(env,effect,next);
            break;
        case effectTypes.SELECT:
            runSelectEffect(env,effect,next);
            break;
        case effectTypes.TAKE:
            runTakeEffect(env,effect,next);
            break;
        case effectTypes.FORK:
            runForkEffect(env,effect,next);
            break;
        case effectTypes.CANCEL:
            runCancelEffect(env,effect,next);
            break;
        case effectTypes.ALL:
            runAllEffect(env,effect,next);
            break;
        default:
            throw new Error("类型无效!");
    }
}