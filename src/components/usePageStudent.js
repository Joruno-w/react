import {useState,useEffect} from 'react';
import {getStudentByPage} from "../services/getStudent";

function usePageStudent() {
    const [resp,setResp] = useState({});
    const [page,setPage] = useState(1);
    const [limit,setLimit] = useState(10);
    useEffect(()=>{
        (async ()=>{
            const result = await getStudentByPage(page,limit);
            setResp(result);
        })();
    },[]);
    return resp;
}

export default usePageStudent;
