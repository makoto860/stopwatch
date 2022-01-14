let stopwatch = document.getElementById('time');
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');

let time = 0;
let timerId = null;

start.addEventListener('click', (event) =>{
  timerId = setInterval( () =>{ 
    time += 1000;
    stopwatch.innerText = time;
  }, 1000);
});

stop.addEventListener('click', (event) => {
    clearInterval(timerId);
});
 
reset.addEventListener('click',(event) => {
  stopWatch.time = "00;00;00";

})