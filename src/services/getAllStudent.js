const appkey = `1_JavaScript_1564315783200`;
export async function getAllStudent() {
    return await fetch(`http://open.duyiedu.com/api/student/findAll?appkey=${appkey}`)
        .then(res=>res.json()).then(res=>res.data);
}
