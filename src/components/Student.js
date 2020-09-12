import React from 'react';

function Student(props) {
    return (
        <li>
            姓名: {props.name}
            邮箱: {props.email}
            性别: {props.sex === 1? '男':'女'}
        </li>
    );
}

export default Student;
