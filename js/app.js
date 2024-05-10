let time = new Date();
let timeText = document.querySelector("#clock");
setInterval(() => {
  time = new Date();
  let timeHours = new Date().getHours();
  let timeMinutes = new Date().getMinutes();
  let timeSecond = new Date().getSeconds();
  timeText.innerHTML = `${timeHours} : ${timeMinutes} : ${timeSecond}`;
}, 1000);
