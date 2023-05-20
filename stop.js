let time=document.querySelector('.heading');
let timer=null;
let [hours,minutes,second]=[0,0,0];
const stopWatch=function() {
    second++;
    if(second==60) {
        second=0;
        minutes++;
        if(minutes==60) {
            minutes=0;
            hours++;
        }
 
   }
   let h=(hours<10)?('0'+hours):hours;
   let m=(minutes<10)?("0"+minutes):minutes;
   let s=(second<10)?("0"+second):second;
   time.innerHTML=`${h}:${m}:${s}`;
   
   
   }




function start() {
    if(!timer==null) {
        clearInterval(timer)
}
timer = setInterval(stopWatch,1000);
console.log(timer);
}
function stop() {
    clearInterval(timer);
    console.log(timer)
}
function restart() {
    clearInterval(timer);
    [hours,minutes,second]=[0,0,0];
    time.innerHTML='00:00:00';
    console.log(timer);
}

