import React from 'react';
import Counter from "./Counter";
import store from "./redux-student";
import {Provider} from 'react-redux';

function App() {
    return(
        <Provider store={store}>
            <Counter />
        </Provider>
    )
}

export default App;