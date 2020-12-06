import React from 'react';
import StudentForm from "../../components/StudentForm";

function Id({match}){
    return(
        <StudentForm sNo={match.params.id} />
    )
}

export default Id;