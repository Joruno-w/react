import React from 'react';
import './index.css';
function Pager(props) {
    const pageNumber = getPageNumber(props);
    if (pageNumber === 0){
        return null;
    }
    const min = getMin(props);
    const max = getMax(min,pageNumber,props);
    const numbers = [];
    for (let i = min;i <= max;i++){
        numbers.push(<span key={i} onClick={()=>toPage(i,props)} className={props.current === i? 'item active': 'item'}>{i}</span>);
    }
    return (
        <>
            <span onClick={()=>toPage(1,props)} className={props.current === 1 ? 'item disabled': 'item'}>首页</span>
            <span onClick={()=>toPage(props.current - 1 < 1 ? 1:props.current - 1,props)} className={props.current === 1 ? 'item disabled': 'item'}>上一页</span>
            {numbers}
            <span onClick={()=>toPage(props.current + 1 > pageNumber ? pageNumber:props.current + 1,props)} className={props.current === pageNumber ? 'item disabled': 'item'}>下一页</span>
            <span onClick={()=>toPage(pageNumber,props)} className={props.current === pageNumber ? 'item disabled': 'item'}>尾页</span>
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

export default Pager;
