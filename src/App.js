import React from 'react';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom';
function A() {
    return <div>
        组件A
    </div>
}
function B() {
    return <div>
        组件B
    </div>
}
function App() {
    return (
        <Router>
            <div>
                <Link to='/a'>a</Link>
                <Link to='/b'>b</Link>
            </div>
            <Route path='/a' component={A} />
            <Route path='/b' component={B} />
        </Router>
    );
}

export default App;