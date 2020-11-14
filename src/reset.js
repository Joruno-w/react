let timer1,timer2;
export default function resetScroll() {
    clearInterval(timer1);
    clearInterval(timer2);
    const html = document.documentElement;
    timer1 = run(html.scrollTop,0,val=>{
        html.scrollTop = val;
    });
    timer2 = run(html.scrollLeft,0,val=>{
        html.scrollLeft = val;
    })
}

function run(start,end,callback) {
    const tick = 16;
    const duration = 1000;
    const times = Math.ceil(duration / tick);
    const dis = (end - start) / times;
    let curTime = 0;
    let timer;
    timer = setInterval(()=>{
        curTime ++;
        start += dis;
        if (curTime === times){
            start = end;
            clearInterval(timer);
        }
        callback(start);
    },tick);
    return timer;
}