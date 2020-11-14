export default class ListenerManager{
    listeners = [];

    addListener(listener){
        this.listeners.push(listener);
        return ()=>{
            const index = this.listeners.indexOf(listener);
            this.listeners.splice(index,1);
        }
    }

    triggerListeners(location,action){
        for(const listener of this.listeners){
            listener(location,action);
        }
    }
}