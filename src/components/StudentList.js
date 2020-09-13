import React from 'react';
import Student from "./Student";
function StudentList(props) {
    const stus = props.stus.map(item=><Student key={item.id} {...item}/>);
    return (
        <div>
            {stus}
        </div>
    );
}

export default StudentList;
