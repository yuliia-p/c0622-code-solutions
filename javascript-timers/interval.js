var textEl = document.querySelector('.countdown-display');

function changeCount() {
  if (textEl.textContent === '4') {
    textEl.textContent = '3';
  } else if (textEl.textContent === '3') {
    textEl.textContent = '2';
  } else if (textEl.textContent === '2') {
    textEl.textContent = '1';
  } else if (textEl.textContent === '1') {
    textEl.textContent = '~Earth Beeeelooowww Us~';
  }
}

setInterval(changeCount, 1000);
var interval = setInterval(changeCount, 1000);
clearInterval(interval);
