//to get the element
const clock = document.querySelector(".clock");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minute");
const seconds = document.querySelector(".second");

function startClock(){
    const myDate = new Date();
    const hour = myDate.getHours();
    const minute = myDate.getMinutes();
    const second = myDate.getSeconds();
    hours.innertText = hour;
    minutes.innertText = minute;
    seconds.innertText = second;
}

//to run every in 1sec interval
setInterval(() => {
    startClock();
},1000);
