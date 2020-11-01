import React, {useLayoutEffect, useRef, useState} from 'react';

function App() {
    const [,forceUpdate] = useState({});
    const h1Ref = useRef();
    useLayoutEffect(()=>{
        h1Ref.current.innerText = Math.random();
    });
    return (
        <div>
            <h1 ref={h1Ref}>0</h1>
            <button onClick={()=>{
                forceUpdate({});
            }}>click</button>
        </div>
    );
}

export default App;