import React from 'react';
import Student from "./Student";
function StudentList(props) {
    const lis = props.stus.map(item=><Student key={item.id} {...item}/>);
    return (
        <ul>
            {lis}
        </ul>
    );
}

export default StudentList;
