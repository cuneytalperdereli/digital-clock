const timer1 = document.getElementById("clock");
const timer2 = document.createElement("p");
timer2.classList = "new_time";
timer1.appendChild(timer2);



 setInterval(() => {
  let date = new Date();
  let hrs = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  let period = "AM";
  if (hrs == 0) {
    hrs = 12;
  } else if (hrs > 12) {
    hrs = hrs - 12;
    period = "PM";
  }
  hrs = hrs < 10 ? "0" + hrs : hrs;
  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;

  time = `${hrs}:${mins}:${secs}:${period}`;
  timer2.innerText = time;
}, 1000);





window.onload = function(){
    document.getElementById("my_audio").play()
}
