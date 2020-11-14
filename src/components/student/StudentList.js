import React, {useEffect, useState} from 'react';
import StudentSearchBar from "../StudentSearchBar";
import StudentTable from "../StudentTable";
import qs from 'query-string';
import {getStudentBySearch} from "../../services/getStudent";
import Pager from "../common/Pager";

function getQuery(url) {
    const defaultQuery = {
        page: 1,
        limit: 10,
        sex: -1,
        key: ''
    }
    let query = qs.parse(url);
    query = Object.assign({},defaultQuery,query);
    query.page = +query.page;
    query.limit = +query.limit;
    query.sex = +query.sex;
    return query;
}

function useResp(query) {
    const [resp,setResp] = useState({
        cont: 0,
        datas: []
    });
    useEffect(()=>{
        getStudentBySearch(query).then(r=>{
            setResp(r);
        });
    },[query.page,query.limit,query.sex,query.key]);
    return resp;
}
function changeLocation(newQuery,history) {
    const search = qs.stringify(newQuery);
    history.push("?" + search);
}

function StudentList(props){
    const query = getQuery(props.location.search);
    const resp = useResp(query);
    return (
        <div>
            <StudentSearchBar defaultValue={{
                key: query.key,
                sex: query.sex
            }} onSearch={cod=>{
                const newQuery = {
                    ...query,
                    key: cod.key,
                    sex: cod.sex,
                    page: 1
                }
                changeLocation(newQuery,props.history);
            }}/>
            <StudentTable stus={resp.datas}/>
            <div>
                <Pager current={query.page} limit={query.limit} panelNumber={5} total={resp.cont} onPageChange={newPage=>{
                    const newQuery = {
                        ...query,
                        page: newPage
                    };
                    changeLocation(newQuery,props.history); 
                }}/>
            </div>
        </div>
    );
}

export default StudentList;