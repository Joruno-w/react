import React from "react";
import ReactDOM from 'react-dom';
import Comp from "./Comp";
ReactDOM.render(<Comp content1={<h1>content1</h1>} content2={<h1>content2</h1>}>
    这是children属性
</Comp>,document.getElementById('root'));
