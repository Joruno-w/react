import React from 'react';
import {connect} from 'dva';
import {Pagination, Table} from 'antd';

function StudentTable({stus,loading}) {
    const columns = [
        {
            title: '学号',
            dataIndex: 'sNo',
        },
        {
            title: '姓名',
            dataIndex: 'name',
        },
        {
            title: '出生日期',
            dataIndex: 'birth',
        },
        {
            title: '电话',
            dataIndex: 'phone',
        },
        {
            title: '邮箱',
            dataIndex: 'email',
        },
        {
            title: '操作',
            dataIndex: 'operation',
            render: (txt, record) => <a href={`/student/${record.sNo}`}>详情</a>
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