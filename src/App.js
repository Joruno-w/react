import React, {useEffect, useRef, useState} from 'react';
function App() {
    const [n,setN] = useState(10);
    const nRef = useRef(n); //{current: 10}
    useEffect(()=>{
        const timer = setInterval(()=>{
            nRef.current--;
            setN(nRef.current);
            if (nRef.current === 0){
                clearInterval(timer);
            }
        },1000);
        return ()=>{
            clearTimeout(timer);
        }
    },[]);
    return (
        <div>
            {n}
        </div>
    );
}

// function App() {
//     const [n, setN] = useState(10);
//     const timer = useRef();
//     useEffect(() => {
//         if (n === 0){
//             return;
//         }
//         timer.current = setTimeout(()=>{
//             console.log(n);
//             setN(n-1);
//         },1000);
//         return ()=>{
//             clearTimeout(timer.current);
//         }
//     }, [n]);
//     return(
//         <div>
//             {n}
//         </div>
//     )
// }
export default App;