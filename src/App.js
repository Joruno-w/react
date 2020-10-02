import React, {Component} from 'react';
import ErrorBound from "./components/common/ErrorBound";

function getDatas() {};
function Comp1() {
    const arr = getDatas();
    const lis = arr.map((it,i)=><li key={i}>{i}</li>)
    return {lis};
}
class App extends Component {
    render() {
        return(
            <ErrorBound>
                <Comp1/>
            </ErrorBound>
        )
    }
}

export default App;
