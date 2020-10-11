const appkey = `1_JavaScript_1564315783200`;
export async function getAllStudent() {
    return await fetch(`/api/student/findAll?appkey=${appkey}`)
        .then(res=>res.json()).then(res=>res.data);
}


export async function getStudentByPage(page=1,limit=10) {
    return await fetch(`/api/student/findByPage?appkey=${appkey}&page=${page}&size=${limit}`)
        .then(res=>res.json()).then(res=>res.data);
}
