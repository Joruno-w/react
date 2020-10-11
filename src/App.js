import React, {useState, useEffect} from 'react';

const divRef = React.createRef();
window.timer = null;

function stop() {
    clearInterval(window.timer);
    window.timer = null;
}

function Move(props) {
    useEffect(() => {
        stop();
        const div = divRef.current;
        let curTime = 0;
        let disX = props.left / 100;
        let disY = props.top / 100;
        window.timer = setInterval(() => {
            curTime++;
            const newLeft = curTime * disX;
            const newTop = curTime * disY;
            div.style.left = newLeft + 'px';
            div.style.top = newTop + 'px';
            if (curTime === 100) {
                stop()
            }
        }, 1000);
        return stop;
    });
    return (
        <div ref={divRef} style={{
            width: 100,
            height: 100,
            background: 'red',
            position: 'fixed',
            left: 0,
            top: 0
        }}></div>
    )
}

function App(props) {
    const [position, setPosition] = useState({
        x: 0,
        y: 0
    });
    const [visible,setVisible] = useState(true);
    return (
        <div>
            {visible && <Move left={position.x} top={position.y}/>}
            <div style={{
                marginLeft: '800px'
            }}>
                x: <input type="number" value={position.x} onChange={e => {
                setPosition({
                    ...position,
                    x: parseInt(e.target.value)
                })
            }}/>
                y: <input type="number" value={position.y} onChange={e => {
                setPosition({
                    ...position,
                    y: parseInt(e.target.value)
                })
            }}/>
                <button onClick={()=>{
                    setVisible(!visible);
                }}>显示/隐藏</button>
            </div>
        </div>
    );
}

export default App;
