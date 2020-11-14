import React from 'react';
import './index.css';
function StudentTable(props) {
    const trs = props.stus.map(it=><tr key={it.id}>
        <td>{it.sNo}</td>
        <td>{it.name}</td>
        <td>{it.birth}</td>
        <td>{it.email}</td>
        <td>{it.phone}</td>
        <td>
            <a href={`/student/${it.sNo}`}>详情</a>
        </td>
    </tr>);
    return (
        <table>
            <thead>
                <tr>
                    <th>学号</th>
                    <th>姓名</th>
                    <th>出生日期</th>
                    <th>邮箱</th>
                    <th>电话</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                {trs}
            </tbody>
        </table>
    );
}

export default StudentTable;