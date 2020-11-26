export const effectTypes = {
    CALL: 'CALL',
    PUT: 'PUT',
    SELECT: 'SELECT',
    DELAY: 'DELAY',
    TAKE: 'TAKE',
    FORK: 'FORK',
    CANCEL: 'CANCEL',
    ALL: 'ALL'
}

const effectObjName = "@@redux-saga/IO";

export function createEffect(type,payload) {
    if (!Object.values(effectTypes).includes(type)){
        throw new TypeError(`${type} is not effectType`);
    }
    return{
        [effectObjName]: true,
        type,
        payload
    }
}

export function isEffect(effect) {
    return typeof effect === "object" && effect[effectObjName] === true
}