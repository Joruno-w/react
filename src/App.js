import React, {useMemo, useState} from 'react';
function Item(props){
    console.log('item render', props.value);
    return <li>{props.value}</li>
}

function App() {
    const [range] = useState({min: 1,max: 1000});
    const [n,setN] = useState(0);
    const list = useMemo(()=>{
        const list = [];
        for (let i = range.min;i <= range.max;i ++){
            list.push(<Item value={i} key={i}/>);
        }
        return list;
    },[range.min,range.max]);
    return (
        <div>
            <ul>
                {list}
                <input type="number" value={n} onChange={e=>{
                    setN(parseInt(e.target.value));
                }}/>
            </ul>
        </div>
    );
}

export default App;