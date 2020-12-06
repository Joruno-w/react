import React from 'react';
import StudentSearchBar from "../../components/StudentSearchBar";
import StudentTable from "../../components/StudentTable";
import Pager from "../../components/Pager";

function Index(props) {
    return (
        <>
            <StudentSearchBar/>
            <br/>
            <StudentTable />
            <br/>
            <Pager/>
            <br/>
        </>
    );
}

export default Index;