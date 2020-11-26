import React from 'react';
import {history} from 'umi';

function Index(props) {
    console.log(props);
    return (
        <div>
            <h1>首页</h1>
            <button onClick={()=>history.push('/page1')}>跳到page1</button>
        </div>
    );
}

export default Index;