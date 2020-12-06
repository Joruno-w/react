import React from 'react';
import {connect} from 'dva';
import {Pagination} from "antd";

function Pager(props) {
    return(
        <Pagination
            style={{
                textAlign: 'center'
            }}
            total={props.total}
            showSizeChanger
            showQuickJumper
            showTotal={total => `总共有${total}条数据`}
            current={props.current}
            pageSize={props.limit}
            onChange={newPage=>props.onPageChange(newPage)}
            responsive
            onShowSizeChange={((current, size) => props.onLimitChange(size))}
        />
    )
}

const mapStateToProps = state=>({
    current: state.students.condition.page,
    panelNumber: 5,
    limit: state.students.condition.limit,
    total: state.students.result.cont,
});

const mapDispatchToProps = dispatch=>({
    onPageChange(newPage){
        dispatch({type:'students/setCondition',payload: {page: newPage}});
        dispatch({type:'students/fetchStudents'});
    },
    onLimitChange(newSize){
        dispatch({type:'students/setCondition',payload: {limit: newSize}});
        dispatch({type:'students/fetchStudents'});
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(Pager);
