import React from 'react';
import store from "./redux-student";
import {Provider} from 'react-redux';
import Counter from "./Counter";
function App() {
    return (
        <Provider store={store}>
            <Counter/>
        </Provider>
    );
}

export default App;