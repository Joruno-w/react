import React from 'react';
import {getAllStudent} from "../services/getStudent";

function Index(props) {
    getAllStudent().then(r=>{
        console.log(r);
    });
    return (
        <h1>首页</h1>
    );
}

export default Index;