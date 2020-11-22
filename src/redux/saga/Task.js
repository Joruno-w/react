export default class Task{
    constructor(next,obj) {
        this.next = next;
        this.obj = obj;
        this.obj.callback = ()=>{
            this.resolve && this.resolve();
        }
    }
    cancel(){
        this.next(null,null,true);
    }

    toPromise(){
        return new Promise(resolve => {
           this.resolve = resolve;
        });
    }
}