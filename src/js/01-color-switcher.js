const btnSrart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const body = document.body;
let intervalId = 0;

btnSrart.addEventListener('click', onBtnStartClick);
btnStop.addEventListener('click', onBtnStopClick);

function onBtnStartClick() {
  if (intervalId !== 0) {
    return;
  }
  intervalId = setInterval(() => {
    getBodyBackgroundColor();
  }, 1000);
}

function onBtnStopClick() {
  clearInterval(intervalId);
  intervalId = 0;
}

function getBodyBackgroundColor() {
  body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
