import React, {useDebugValue, useEffect, useState} from 'react';

function useTest() {
    const [students] = useState([]);
    useDebugValue("学生集合");
    return students;
}

function App() {
    useState('123');
    useEffect(()=>{});
    useState("abc");
    useTest();
    return (
        <div>

        </div>
    );
}

export default App;