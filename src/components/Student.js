import React from 'react';

function Student(props) {
    return (
        <div>
            【姓名】: {props.name}
            【性别】: {props.sex === 1?'男':'女'}
            【电话】: {props.phone}
            【邮箱】: {props.email}
        </div>
    );
}

export default Student;
