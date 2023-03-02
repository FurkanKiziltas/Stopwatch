window.onload = function () {
    let minutes = 0;
    let seconds = 0;
    let tens = 0;
    let appendMinutes = document.getElementById("minutes");
    let appendTens = document.getElementById("tens");
    let appendSeconds = document.getElementById("seconds");
    let buttonStart = document.getElementById("start");
    let buttonStop = document.getElementById("stop");
    let buttonReset = document.getElementById("reset");
    let Interval;
  
    buttonStart.onclick = function () {
      clearInterval(Interval);
      Interval = setInterval(startTimer, 10);
    };
  
    buttonStop.onclick = function () {
      clearInterval(Interval);
    };
  
    buttonReset.onclick = function () {
      clearInterval(Interval);
      minutes = 0;
      tens = 0;
      seconds = 0;
      appendMinutes.innerHTML = "0" + minutes;
      appendTens.innerHTML = "0" + tens;
      appendSeconds.innerHTML = "0" + seconds;
    };
  
    function startTimer() {
      tens++;
  
      if (tens <= 9) {
        appendTens.innerHTML = "0" + tens;
      }
  
      if (tens > 9) {
        appendTens.innerHTML = tens;
      }
  
      if (tens > 99) {
        seconds++;
        appendSeconds.innerHTML = seconds < 10 ? "0" + seconds : seconds;
        tens = 0;
        appendTens.innerHTML = "0" + tens;
      }
  
      if (seconds > 59) {
        minutes++;
        appendMinutes.innerHTML = minutes < 10 ? "0" + minutes : minutes;
        seconds = 0;
        appendSeconds.innerHTML = "0" + seconds;
      }
    }
  };
  