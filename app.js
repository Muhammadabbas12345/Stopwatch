  // Stopwatch logic
  let timerId;
  let milliseconds = 0;
  let seconds = 0;
  let minutes = 0;
  let hours = 0;
  let displayTimer = document.querySelector('.timer');

  function startTimer() {
    timerId = setInterval(updateTimer, 10);
  }

  function stopTimer() {
    clearInterval(timerId);
  }

  function resetTimer() {
    clearInterval(timerId);
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    displayTimer.textContent = formatTime(0, 0, 0, 0);
  }

  function updateTimer() {
    milliseconds += 10;

    if (milliseconds === 1000) {
      milliseconds = 0;
      seconds++;

      if (seconds === 60) {
        seconds = 0;
        minutes++;

        if (minutes === 60) {
          minutes = 0;
          hours++;
        }
      }
    }

    displayTimer.textContent = formatTime(hours, minutes, seconds, milliseconds);
  }

  function formatTime(hours, minutes, seconds, milliseconds) {
    return (
      (hours < 10 ? '0' + hours : hours) +
      ':' +
      (minutes < 10 ? '0' + minutes : minutes) +
      ':' +
      (seconds < 10 ? '0' + seconds : seconds) +
      ':' +
      (milliseconds < 100
        ? milliseconds < 10
          ? '00' + milliseconds
          : '0' + milliseconds
        : milliseconds)
    );
  }

  // Event listeners
  document.querySelector('.start').addEventListener('click', startTimer);
  document.querySelector('.stop').addEventListener('click', stopTimer);
  document.querySelector('.reset').addEventListener('click', resetTimer);