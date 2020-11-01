import React, {useCallback, useState} from 'react';
class Test extends React.PureComponent{
    render() {
        console.log("Test render");
        return(
            <div>
                <div>{this.props.txt}</div>
                <button onClick={this.props.onClick}>change</button>
            </div>
        )
    }
}
function App() {
    console.log("App render");
    const [txt,setTxt] = useState(123);
    const [n,setN] = useState(0);
    const handleClick = useCallback(()=>{
        setTxt(txt+1)
    },[txt]);
    return (
        <div>
            <Test txt={txt} onClick={handleClick}/>
            <input type="number" value={n} onChange={e=>{
                setN(parseInt(e.target.value));
            }}/>
        </div>
    );
}

export default App;
