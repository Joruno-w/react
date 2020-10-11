import {useState,useEffect} from 'react';
import {getAllStudent} from "../services/getStudent";

function useAllStudent(props) {
    const [student,setStudent] = useState([]);
    useEffect(()=>{
        (async ()=>{
            const result = await getAllStudent();
            setStudent(result);
        })();
    },[]);
    return student;
}

export default useAllStudent;
