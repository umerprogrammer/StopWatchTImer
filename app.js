var hours = 0;
var minuts = 0;
var seconds = 0;
var milliseconds = 0;

var phours = document.getElementById('hour');
var pminuts = document.getElementById('minuts');
var pseconds = document.getElementById('seconds');
var pmilliseconds = document.getElementById('milliseconds');

var interval;

function startWatch(){
    interval = setInterval(() => {
        milliseconds++;
        pmilliseconds.innerHTML = milliseconds.toString().length > 1 ?  milliseconds :"0"+ milliseconds;
        if(milliseconds == 10)
        {
            milliseconds = 0;
            seconds++;
            pseconds.innerHTML =  seconds.toString().length > 1 ? seconds : "0" + seconds;
            if(seconds == 5)
            {
                seconds = 0;
                minuts++;
                pminuts.innerHTML =  minuts.toString().length > 1 ? minuts : "0" + minuts;

                if(minuts == 3)
                {
                    minuts = 0;
                    hours++;
                    phours.innerHTML =  hours.toString().length > 1 ? hours : "0" + hours;
                    pminuts.innerHTML =  "00";
                   
                }

            }
        }
    }, 100);

    document.getElementById('btnstart').disabled = true;
    document.getElementById('btnstop').disabled = false;
    document.getElementById('btnreset').disabled = false;
}

function stopWatch(){
    
    clearInterval(interval);
    document.getElementById('btnstart').disabled = false;
    document.getElementById('btnstop').disabled = true;
    document.getElementById('btnreset').disabled = false;
}

function resetWatch(){
    
    clearInterval(interval);
    hours = 0;
    phours.innerHTML = "00";
    minuts = 0;
    pminuts.innerHTML = "00";
    seconds = 0;
    pseconds.innerHTML = "00";
    milliseconds = 0;
    pmilliseconds.innerHTML = "00";
    document.getElementById('btnstart').disabled = false;
    document.getElementById('btnstop').disabled = true;
    document.getElementById('btnreset').disabled = true;
}