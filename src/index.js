import React from 'react';
import ReactDOM from 'react-dom';
import src1 from './img/1.jpg';
import src2 from './img/2.jpg';
import src3 from './img/3.jpg';
import './index.css';
const imgSrc = [src1,src2,src3];
let timer = null;
let index = 0;
const container = document.getElementById('root')
function render(){
    ReactDOM.render(<img src={imgSrc[index]} alt=""/>,container);
}
render();
function start() {
    if (timer){
        return;
    }
    timer = setInterval(()=>{
        index = (index+1) % imgSrc.length;
        render();
    },1000);
}
start();

function stop() {
    clearInterval(timer);
    timer = null;
}

container.onmouseenter = function () {
    stop();
}

container.onmouseleave = function () {
    start();
}



