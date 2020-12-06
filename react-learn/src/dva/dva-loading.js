const SHOW = "@@DVA_SHOW";
const HIDE = "@@DVA_HIDE";
export default function ({namespace = "loading"} = {}) {
    const initialState = {
        global: false,
        models: {},
        effects: {}
    }

    function reducer(state = initialState, {type, payload}) {
        const {namespace, actionType} = payload || {};
        switch (type) {
            case SHOW:
                return {
                    global: true,
                    models: {
                        ...state.models,
                        [namespace]: true
                    },
                    effects: {
                        ...state.effects,
                        [actionType]: true
                    }
                }
            case HIDE:
                const models = {
                    ...state.models,
                    [namespace]: true
                };
                const effects = {
                    ...state.effects,
                    [actionType]: true
                }
                const global = Object.values(models).includes(true);
                return {
                    global,
                    models,
                    effects,
                }
            default:
                return state;
        }
    }

    function onEffect(oldEffect, sagaEffects, model, actionType) {
        return function* (action) {
            yield sagaEffects.put({
                type: SHOW,
                payload: {
                    namespace: model.namespace,
                    actionType,
                }
            });
            yield oldEffect(action);
            yield sagaEffects.put({
                type: HIDE,
                payload: {
                    namespace: model.namespace,
                    actionType,
                }
            });
        }
    }

    return {
        extraReducers: {
            [namespace]: reducer
        },
        onEffect,
    }
}