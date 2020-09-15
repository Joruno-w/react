import React, {Component} from 'react';
import WithLog from "./HOC/WithLog";
import {A,B} from './components/Comps';
import WithLogin from "./HOC/WithLogin";
const AComp = WithLog(WithLogin(A,'abc'));
const BComp = WithLog(WithLogin(B,'bcd'));
class App extends Component {
    render() {
        return (
            <div>
                <AComp isLogin a={1}/>
                <BComp isLogin b={2}/>
            </div>
        );
    }
}

export default App;
