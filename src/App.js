import React, {Component} from 'react';
import ReactDOM from 'react-dom';
function A() {
    return ReactDOM.createPortal(<div>
        <B/>
    </div>,document.getElementById('modal'));
}

function B() {
    return <div>
        B
    </div>
}
class App extends Component {

    render() {
        return (
            <div onClick={()=>{
                console.log('click');
            }}>
                App
                <A />
            </div>
        );
    }
}

export default App;
