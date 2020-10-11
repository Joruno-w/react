import React, {useState} from 'react';

function App(props) {
    const [visible, setVisible] = useState(true);
    const [n, setN] = useState(0);
    const [,forceUpdate] = useState({});
    return (
        <div>
            {visible && (<>
                <button onClick={() => {
                    setN(n - 1);
                }}>-
                </button>
                <span>{n}</span>
                <button onClick={() => {
                    setN(n + 1);
                }}>+
                </button>
            </>)}
            <p>
                <button onClick={() => {
                    setVisible(!visible);
                }}>显示/隐藏
                </button>
                <button onClick={()=>{
                    forceUpdate({});
                }}>强制刷新</button>
            </p>
        </div>
    );
}

export default App;
