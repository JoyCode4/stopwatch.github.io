let hrs=document.getElementById("hrs");
let min=document.getElementById("min");
let sec=document.getElementById("sec");
let count=document.getElementById("count");
let btn_stop=document.getElementById("stop");
let btn_start=document.getElementById("start");
let btn_reset=document.getElementById("reset");
let interval;
// console.log(hrs,min,sec,btn_reset,btn_start,btn_stop);
function initializing(){
    hrs.innerText="00";
    min.innerText="00";
    sec.innerText="00";
    count.innerText="00";
    stop();
}
function stop(){
    clearInterval(interval);
}
function start(){
    interval=setInterval(function(){
        if(count.innerText==99){
            count.innerText=0;
            sec.innerText++;
            if(sec.innerText<10){
                sec.innerText="0"+sec.innerText;
            }
            console.log(sec.innerText);
            if(sec.innerText==60){
                min.innerText++;
                if(min.innerText<10){
                    min.innerText="0"+min.innerText;
                }
                sec.innerText=0;
                if(min.innerText==60){
                    hrs.innerText++;
                    if(hrs.innerText<10){
                        hrs.innerText="0"+hrs.innerText;
                    }
                    min.innerText=0;
                }
            }
        }
        count.innerText++;
        if(count.innerText<10){
            count.innerText="0"+count.innerText;
        }
    },10);
}

function stopWatch(){
    btn_start.addEventListener("click",start);
    btn_stop.addEventListener("click",stop);
    btn_reset.addEventListener("click",initializing);
}

stopWatch();