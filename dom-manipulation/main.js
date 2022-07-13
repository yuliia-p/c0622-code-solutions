var clickCount = 0;
var buttonEl = document.querySelector('.hot-button');
var count = document.querySelector('.click-count');

function buttonClick() {
  clickCount++;
  count.textContent = 'Clicks: ' + clickCount;
  var a = null;
  if (clickCount < 4) {
    a = 'cold';
  } else if (clickCount < 7) {
    buttonEl.className = 'cool';
    a = 'cool';
  } else if (clickCount < 10) {
    buttonEl.className = 'tepid';
    a = 'tepid';
  } else if (clickCount < 13) {
    a = 'warm';
  } else if (clickCount < 16) {
    a = 'hot';
  } else {
    a = 'nuclear';
  }
  buttonEl.className = 'hot-button ' + a;
}

buttonEl.addEventListener('click', buttonClick);
