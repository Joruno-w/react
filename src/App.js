import React,{useContext} from 'react';
const ctx = React.createContext();

function Test() {
    const value = useContext(ctx);
    return <h1>上下文中的数据为: {value}</h1>
}

function App() {
    return (
        <ctx.Provider value="123">
            <Test/>
        </ctx.Provider>
    );
}

export default App;
