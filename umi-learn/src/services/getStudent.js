import qs from 'querystring';
const appkey = `1_JavaScript_1564315783200`;
export async function getAllStudent() {
    return await fetch(`/api/student/findAll?appkey=${appkey}`)
        .then(res=>res.json()).then(res=>res.data);
}


export async function getStudentByPage(page=1,limit=10) {
    return await fetch(`/api/student/findByPage?appkey=${appkey}&page=${page}&size=${limit}`)
        .then(res=>res.json()).then(res=>res.data);
}


export async function getStudentBySearch({key = '',sex=-1,page=1,limit=10}={}){
    if (key){
        const resp = await fetch(`/api/student/searchStudent?appkey=${appkey}&search=${key}&sex=${sex}&page=${page}&size=${limit}`)
            .then(res=>res.json()).then(res=>res.data);
        resp.datas = resp.searchList;
        delete resp.searchList;
        return resp;
    }else{
        const resp = await getStudentByPage(page,limit);
        resp.datas = resp.findByPage;
        delete resp.findByPage;
        return resp;
    }

}

export async function addStudentBySearch(stuObj) {
    const stuStr = qs.stringify(stuObj);
    return await fetch(`/api/student/addStudent?appkey=${appkey}&${stuStr}`)
        .then(res=>res.json());
}

export async function updateStudentBySearch(stuObj) {
    const stuStr = qs.stringify(stuObj);
    return await fetch(`/api/student/updateStudent?appkey=${appkey}&${stuStr}`)
        .then(res=>res.json());
}

export async function getStudentBysNo(sNo) {
    const stus = await getAllStudent();
    return stus.find(s=>s.sNo === sNo);
}

