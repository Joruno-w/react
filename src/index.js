import React from "react";
import ReactDOM from 'react-dom';
import StudentList from "./components/StudentList";
const appkey = `1_JavaScript_1564315783200`;
async function getAllStudent() {
    return await fetch(`http://open.duyiedu.com/api/student/findAll?appkey=${appkey}`)
        .then(res => res.json()).then(res => res.data);
}

async function render(){
    ReactDOM.render('正在加载中···',document.getElementById('root'));
    const stus = await getAllStudent();
    ReactDOM.render(<StudentList stus={stus}/>,document.getElementById('root'));
}
render();



