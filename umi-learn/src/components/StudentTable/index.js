import React, {useState} from 'react';
import {connect} from 'dva';
import {message, Pagination, Table, Spin} from 'antd';
import {withRouter} from 'umi';
import {delStudentBysNo} from "../../services/getStudent";


function StudentTable({stus, loading}) {
    async function deleteStudent(record) {
        const result = await delStudentBysNo(record.sNo);
        if (result.status === "success") {
            await message.success("删除学生成功!", 1);
            history.go(0);
        } else {
            await message.error("删除学生失败!", 2);
        }
    }

    const columns = [
        {
            title: '学号',
            dataIndex: 'sNo',
            align: "center"
        },
        {
            title: '姓名',
            dataIndex: 'name',
            align: "center"
        },
        {
            title: '出生日期',
            dataIndex: 'birth',
            align: "center"
        },
        {
            title: '电话',
            dataIndex: 'phone',
            align: "center"
        },
        {
            title: '邮箱',
            dataIndex: 'email',
            align: "center"
        },
        {
            title: '操作',
            dataIndex: 'operation',
            align: "center",
            render: (txt, record) => (
                <>
                    <a href={`/student/${record.sNo}`} style={{marginRight: 5}}>修改</a>
                    <a href="javascript:void 0;" onClick={()=>deleteStudent(record)}>删除</a>
                </>
            )
        },
    ];
    return (
        <Table size="small" loading={loading} bordered dataSource={stus} columns={columns} pagination={false}/>
    );
}

const mapStateToProps = state => ({
    stus: state.students.result.datas,
    loading: state.loading.effects["students/fetchStudents"]
});

export default connect(mapStateToProps, null)(StudentTable);