import React from 'react';
import ReactDOM from 'react-dom';

// const div = (
//     <React.Fragment>
//         <div>hello,world</div>
//         <div>wsl</div>
//     </React.Fragment>
// );
// React.createElement("div",{},React.createElement("span",{},'一个span'));

// const div = (
//     <>
//         <div>hello,world</div>
//         <div>wsl</div>
//     </>
// );
// const a = 4321, b = 1234;
// const arr = [null,undefined,false,1,2];
// const array = new Array(30).fill(0);
// const lis =  array.map((item,i)=><li key={i}>{i}</li>);
// const content = `<div>123456789</div>`
// const div = (
//     <>
//         <div>
//             {a} * {b} = {a * b}
//         </div>
//         <div>
//             {"null"}
//             {null}
//             {undefined}
//             {false}
//         </div>
//         <div>
//              {arr}
//         </div>
//         <ul>
//              {lis}
//         </ul>
//         <div dangerouslySetInnerHTML={{
//                 __html: content
//         }}>
//         </div>
//     </>
// )
let num = 0;
setInterval(()=>{
        num++;
        const div = (
            <h1>{num}</h1>
        );
        ReactDOM.render(div, document.getElementById('root'));
},1000);
