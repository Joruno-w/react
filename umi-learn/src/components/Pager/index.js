import React from 'react';
import {connect} from 'dva';
import styles from './index.css';

console.log(styles);
function Pager(props) {
    const pageNumber = getPageNumber(props);
    if (pageNumber === 0){
        return null;
    }
    const min = getMin(props);
    const max = getMax(min,pageNumber,props);
    const numbers = [];
    for (let i = min;i <= max;i++){
        numbers.push(<span key={i} onClick={()=>toPage(i,props)} className={props.current === i? `${styles.item} ${styles.active}`:styles.item}>{i}</span>);
    }
    return (
        <>
            <span onClick={()=>toPage(1,props)} className={props.current === 1 ? `${styles.item} ${styles.disabled}`: styles.item}>首页</span>
            <span onClick={()=>toPage(props.current - 1 < 1 ? 1:props.current - 1,props)} className={props.current === 1 ? `${styles.item} ${styles.disabled}`: styles.item}>上一页</span>
            {numbers}
            <span onClick={()=>toPage(props.current + 1 > pageNumber ? pageNumber:props.current + 1,props)} className={props.current === pageNumber ? `${styles.item} ${styles.disabled}`: styles.item}>下一页</span>
            <span onClick={()=>toPage(pageNumber,props)} className={props.current === pageNumber ? `${styles.item} ${styles.disabled}`: styles.item}>尾页</span>
            <span>{props.current}</span>
            <span>/</span>
            <span>{pageNumber}</span>
        </>
    );
}

function getMin(props) {
    let min = props.current - Math.floor(props.panelNumber / 2);
    if(min <= 1){
        min = 1;
    }
    return min;
}

function getMax(min,pageNumber,props) {
    let max = min + props.panelNumber - 1;
    if (max >= pageNumber){
        max = pageNumber;
    }
    return max;
}

function toPage(target,props) {
    if (props.current === target){
        return;
    }
    props.onPageChange && props.onPageChange(target);
}

function getPageNumber({total,limit}) {
    return Math.ceil(total / limit);
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
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(Pager);
