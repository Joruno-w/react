import React, {Component} from 'react';
let prev;
class App extends Component {
    render() {
        return(
            <div onClick={e=>{
                console.log("React事件：div click");
                console.log(e,prev,prev === e);
            }}>
                <button onClick={e=>{
                    console.log('React事件：button click');
                    prev = e;
                    e.persist();
                    e.nativeEvent.stopImmediatePropagation();
                    console.log(e.isPropagationStopped());
                    e.stopPropagation();
                    console.log(e.isPropagationStopped());
                }}>click</button>
            </div>
        );
    }
}

document.querySelector("#root").onclick = function (e) {
    console.log('DOM事件：document click!')
}

export default App;
