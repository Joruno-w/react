export default class Channel{
    listeners = {};

    take(prop,func){
        if (this.listeners[prop]){
            this.listeners[prop].push(func);
        }else{
            this.listeners[prop] = [func];
        }
    }

    put(prop,...args) {
        if (this.listeners[prop]) {
            delete this.listeners[prop];
            this.listeners[prop].forEach(func => func(...args));
        }
    }

}