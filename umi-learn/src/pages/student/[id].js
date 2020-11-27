import React from 'react';

function Id({match}){
    return(
        <div>
            <h1>修改学生</h1>
            <h1>学号: {match.params.id}</h1>
        </div>
    )
}

export default Id;