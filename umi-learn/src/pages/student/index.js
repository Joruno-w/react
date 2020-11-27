import React from 'react';
import StudentSearchBar from "../../components/StudentSearchBar";
import StudentTable from "../../components/StudentTable";
import Pager from "../../components/Pager";
import Loading from "../../components/Loading";

function Index(props) {
    return (
        <>
            <StudentSearchBar/>
            <StudentTable />
            <Pager/>
            <Loading/>
        </>
    );
}

export default Index;