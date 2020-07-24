let sec = 0;
let min = 0;

let disSec = 0;
let disMin = 0;
let interval = null;
let status = "paused";
function stopwatch() {
  sec++;
  if (sec / 60 === 1) {
    sec = 0;
    min++;
  }
  if (sec < 10) {
    disSec = "0" + sec.toString();
  } else {
    disSec = sec;
  }
  if (min < 10) {
    disMin = "0" + min.toString();
  } else {
    disMin = min;
  }
  if (min === 5) {
    reset();
    }
  
  else{  document.getElementById("display").innerHTML = disMin + ":" + disSec;
    document.getElementById("display").style.color="black";
    }
}

function startStop() {
  if (status == "paused") {
    interval = window.setInterval(stopwatch, 1000);
    document.getElementById("startStop").innerHTML = "Pause";
    status = "started";
  }
   else {
    window.clearInterval(interval);
    window.document.getElementById("startStop").innerHTML = "Start";
    status = "paused";
  }
}

function reset() {
  window.clearInterval(interval);
  sec = 0;
  min = 0;
  disMin = "00";
  disSec = "00";
  document.getElementById("startStop").innerHTML = "Reset";
    
  document.getElementById("display").innerHTML = disMin + ":" + disSec;
  document.getElementById("display").style.color="red";
}
