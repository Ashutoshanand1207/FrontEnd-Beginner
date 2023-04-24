const display = document.querySelector('.display');
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');

let startTime, intervalId;

//Define the start function that Starts Time:

function start(){
    startTime = Date.now();
    intervalId = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        const seconds = Math.floor(elapsedTime/1000);
        const minutes = Math.floor(seconds/60);
        const hours = Math.floor(minutes/60);

//HH:MM:SS;

        const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;

        display.textContent = formattedTime;

    }, 10);
}

    function stop(){
        clearInterval(intervalId);
    }

    function reset(){
        clearInterval(intervalId);
        display.textContent = '00:00:00';

    }

    //Adding a leading ) to a number id its less the 10
    function pad(number){
        return number <  10 ? '0' + number : number;


    }

    startBtn.addEventListener('click', start);
    stopBtn.addEventListener('click', stop);
    resetBtn.addEventListener('click', reset);


