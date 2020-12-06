import React from 'react';

function StudentDetail(props) {
    return (
        <div>
            <h1>学生详情页</h1>
            <h1>学号为: {props.match.params.sno}</h1>
        </div>
    );
}

export default StudentDetail;