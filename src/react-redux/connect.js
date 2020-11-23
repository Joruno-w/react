import React, {useContext, useEffect, useState} from 'react';
import ctx from "./ctx";
import {bindActionCreators} from 'redux';

function compare(obj1,obj2){
    for (const key in obj1) {
        if (!Object.is(obj1[key],obj2[key])){
            return false;
        }
    }
    return true;
}

function Connect(mapStateToProps, mapDispatchToProps) {
    return function (Comp) {
        // class Temp extends React.PureComponent{
        //     static contextType = ctx;
        //     getHandlers(){
        //         if (typeof mapDispatchToProps === "function"){
        //             return mapDispatchToProps(this.store.dispatch,this.props);
        //         }else if (typeof mapDispatchToProps === "object"){
        //             return bindActionCreators(mapDispatchToProps,this.store.dispatch);
        //         }
        //     }
        //     constructor(props,context) {
        //         super(props,context);
        //         this.store = context;
        //         if (mapStateToProps){
        //             this.state = mapStateToProps(this.store.getState(),this.props);
        //             this.unListen = this.store.subscribe(()=>{
        //                 this.setState(mapStateToProps(this.store.getState(),this.props));
        //             })
        //         }
        //         if (mapDispatchToProps){
        //             this.handlers = this.getHandlers();
        //         }
        //     }
        //
        //     componentWillUnmount() {
        //         this.unListen && this.unListen();
        //     }
        //
        //     render() {
        //         return <Comp {...this.props} {...this.state} {...this.handlers} />
        //     }
        // }
        function Temp(props) {
            const store = useContext(ctx);
            const [state, setState] = useState(mapStateToProps && mapStateToProps(store.getState()));
            useEffect(()=>{
                return store.subscribe(()=>{
                    const newState = mapStateToProps && mapStateToProps(store.getState());
                    setState(prevState=>{
                        if (compare(prevState,newState)){
                            return prevState;
                        }else{
                            return newState;
                        }
                    });
                });
            },[store]);
            function getHandlers() {
                if (typeof mapDispatchToProps === "function") {
                    return mapDispatchToProps(store.dispatch, props);
                } else if (typeof mapDispatchToProps === "object") {
                    return bindActionCreators(mapDispatchToProps, store.dispatch);
                }
            }
            let handlers = {};
            if (mapDispatchToProps){
                handlers = getHandlers();
            }
            return <Comp {...props} {...handlers} {...state}/>
        }

        Temp.displayName = Comp.displayName || Comp.name;
        return Temp;
    }
}

export default Connect;