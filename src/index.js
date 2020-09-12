import React from "react";
import ReactDOM from 'react-dom';
import MyClassComp from "./MyClassComp";
import MyFuncComp from "./MyFuncComp";

ReactDOM.render((<>
    <MyFuncComp number={1}/>
    <MyFuncComp number={2}/>
    <MyFuncComp number={3}/>
    <MyClassComp number={4}/>
    <MyClassComp obj={{
        name: 'wsl',
        age: 20
    }}/>
    <MyClassComp enabled />
</>),document.getElementById('root'));
