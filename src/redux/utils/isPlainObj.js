export default function isPlainObj(action) {
    if (typeof action !== "object"){
        throw new TypeError("action must be a object");
    }
    return Object.prototype.isPrototypeOf(action);
}