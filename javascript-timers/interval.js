var textEl = document.querySelector('.countdown-display');
var count = 4;
setInterval(changeCount, 1000);
// var intervalId = setInterval(changeCount, 1000);

function changeCount() {
  count--;
  if (count > 0) {
    textEl.textContent = count;
  } else {
    textEl.textContent = '~Earth Beeeelooowww Us~';
  }
  // clearInterval(intervalId);
}
