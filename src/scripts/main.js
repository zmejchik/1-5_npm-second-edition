const moment = require('moment');
/**
 * Function to change the displayed minute count for timer
 * @param {string} directChangeMinute
 */
function changeMinute(directChangeMinute) {
  const divLabelMinutes = window.document.getElementsByClassName('digit-minute')[0];
  let countMinute = Number(divLabelMinutes.innerHTML);
  if (directChangeMinute === 'minusone') {
    if (countMinute !== 0) countMinute -= 1;
  }
  if (directChangeMinute === 'plusone') {
    countMinute += 1;
  }
  divLabelMinutes.innerHTML = countMinute;
}
/**
 * Function to hide all buttons on the page
 */
function hiddenAllButtons() {
  const buttonStart = window.document.getElementsByClassName('start-button')[0];
  const buttonsArray = Array.from(
    window.document.getElementsByClassName('button'),
  );
  buttonsArray.push(buttonStart);
  buttonsArray.forEach((btn) => {
    btn.classList.add('hidden');
  });
}
/**
 * Function to change font size and label text
 */
function changeFontSize() {
  const label = window.document.getElementById('label');
  label.innerHTML = 'Залишилось';
  label.style.fontSize = '4em';
  const digitMinute = window.document.getElementsByClassName('digit-minute')[0];
  digitMinute.style.fontSize = '10em';
}
/**
 * Function to start the timer
 */
function startTimer() {
  hiddenAllButtons();
  changeFontSize();
  const startDate = moment();
  // Get the interval for the timer from the displayed minute count
  const interval = Number(
    document.getElementsByClassName('digit-minute')[0].innerHTML,
  );
  const endDate = moment(startDate).add(interval, 'minutes');
  // Function to update the timer display
  const updateTimer = () => {
    const currentTime = moment();
    const remainingTime = endDate.diff(currentTime, 'seconds');
    if (remainingTime >= 0) {
      const minutes = Math.floor(remainingTime / 60);
      const seconds = remainingTime - minutes * 60;
      document.getElementsByClassName('digit-minute')[0].innerHTML = moment()
        .minutes(minutes)
        .second(seconds)
        .format('mm:ss');
      setTimeout(updateTimer, 1000);
    }
  };
  // Start the timer update loop
  updateTimer();
}
/**
 * Event listeners for the minusone, plusone, and startTimer buttons
 */
document.getElementById('minusone').addEventListener('click', () => {
  changeMinute('minusone');
});
document.getElementById('plusone').addEventListener('click', () => {
  changeMinute('plusone');
});
document.getElementById('startTimer').addEventListener('click', () => {
  startTimer();
});
