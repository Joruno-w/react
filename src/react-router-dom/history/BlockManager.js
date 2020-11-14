export default class BlockManager{
    constructor(getUserConfirmation) {
        this.getUserConfirmation = getUserConfirmation;
    }

    prompt = null;
    addBlock(prompt){
        if (typeof prompt !== "string" && typeof prompt !== "function"){
            throw new TypeError("msg must be a string or function");
        }
        return ()=>{
            this.prompt = null;
        }
    }

    triggerBlock(location,action,callback){
        if (!this.prompt){
            callback();
            return;
        }
        let message;
        if (typeof this.prompt === "string"){
            message = this.prompt;
        }else if (typeof this.prompt === "function"){
            message = this.prompt(location,action);
        }
        this.getUserConfirmation(message,result=>{
            if (result === true){
                callback();
            }
        });
    }
}