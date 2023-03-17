const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (timestamp) => {
    interval = setInterval(function () {
      buttonEl.disabled = true;
      const hours = Math.floor(timestamp / 3600);
      const minutes = Math.floor((timestamp % 3600) / 60);
      const seconds = timestamp % 60;

      timerEl.textContent = (`${addZero(hours)} : ${addZero(minutes)} : ${addZero(seconds)}`);

      if (hours === 0 && minutes === 0 && seconds === 0) {
        buttonEl.disabled = false;
        clearInterval(interval);
      }

      timestamp -= 1;
    }, 1000);
  }
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  inputEl.value = inputEl.value.replace(/[^0-9\.]/g, '');
});

buttonEl.addEventListener('click', () => {
  inputEl.value === '' && alert("Введите кол-во секунд");
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});

function addZero(unitOfTime) {
  return unitOfTime = (unitOfTime < 10) ? '0' + unitOfTime : unitOfTime;
}
