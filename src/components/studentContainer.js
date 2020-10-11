import React,{useState,useEffect} from 'react';
import StudentList from "./studentList";
import {getStudentByPage} from "../services/getStudent";
import Pager from "./common/Pager";
function StudentContainer(props) {
    const [student,setStudent] = useState([]);
    const [panelNumber,setPanelNumber] = useState(5);
    const [total,setTotal] = useState(0);
    const [page,setPage] = useState(1);
    const [limit,setLimit] = useState(10);
    useEffect(()=>{
        (async ()=>{
            const result = await getStudentByPage(page,limit);
            setTotal(result.cont);
            setStudent(result.findByPage);
        })();
    },[page,limit]);
    return (
        <div>
            <StudentList stus={student}/>
            <Pager
                current={page}
                limit={limit}
                total={total}
                panelNumber={panelNumber}
                onPageChange={newPage=>{
                    setPage(newPage);
                }}
            />
            <input type="number" value={panelNumber} onChange={e=>{
                setPanelNumber(parseInt(e.target.value));
            }}/>
            <input type="number" value={limit} onChange={e=>{
                setLimit(parseInt(e.target.value));
            }}/>
        </div>
    );
}

export default StudentContainer;
