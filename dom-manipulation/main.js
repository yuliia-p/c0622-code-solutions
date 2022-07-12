var clickCount = 0;
var buttonEl = document.querySelector('.hot-button');
var count = document.querySelector('.click-count');

// define a function that
// increments the counter variable
// return the increment value form the function
function buttonClickIncr() {
  clickCount++;

}

buttonEl.addEventListener('click', buttonClickIncr);

// define a function
// that updates textContent of the '.click-count' element
// each time the user clicks

function textCountUpdate() {
  count.textContent = 'Clicks: ' + clickCount;
  return count.textContent;
}

buttonEl.addEventListener('click', textCountUpdate);

function classNameUpdate() {
  clickCount++;
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

buttonEl.addEventListener('click', classNameUpdate);
