import {useState,useEffect} from 'react';

function useTimer(func,duration) {
    useEffect(()=>{
        const timer = setInterval(func,duration);
        return ()=>{
            clearInterval(timer);
        }
    },[]);
}

export default useTimer;
