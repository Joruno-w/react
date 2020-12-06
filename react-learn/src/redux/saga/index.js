import runSaga from "./runSaga";
import Channel from "./Channel";
export default function () {
    return function sagaMiddleware(store) {
        const env = {
            store,
            channel: new Channel()
        }
        sagaMiddleware.run = runSaga.bind(null,env);
        return function (next) {
            return function (action) {
                const result = next(action);
                env.channel.put(action.type,action);
                return result;
            }
        }
    }
}