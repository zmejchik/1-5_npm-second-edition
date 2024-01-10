import moment from 'moment';

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

function changeFontSize() {
  const label = window.document.getElementById('label');
  label.innerHTML = 'Залишилось';
  label.style.fontSize = '4em';
  const digitMinute = window.document.getElementsByClassName('digit-minute')[0];
  digitMinute.style.fontSize = '10em';
}

function startTimer() {
  hiddenAllButtons();
  changeFontSize();
  const startDate = moment();
  const interval = Number(
    document.getElementsByClassName('digit-minute')[0].innerHTML,
  );
  const endDate = moment(startDate).add(interval, 'minutes');

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

  updateTimer();
}
