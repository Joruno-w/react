import React from 'react';
import store from "./redux-student";
import {Provider} from "react-redux";
import StudentSearch from "./components/StudentSearch";

console.log(store.getState());
function App() {
    return (
        <Provider store={store}>
            <StudentSearch/>
        </Provider>
    );
}

export default App;