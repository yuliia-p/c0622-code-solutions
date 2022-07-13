
var switchLight = document.querySelector('.light-bulb');

var background = document.querySelector('.background-light');

var currentState = true;
function turnOnOffLight() {
  if (currentState) { // if on turm off
    switchLight.className = 'light-bulb light-bulb-off';
    background.className = 'background-light light-off display-flex';
  } else { // if off turn on
    switchLight.className = 'light-bulb light-bulb-on';
    background.className = 'background-light light-on display-flex';
  }
  currentState = !currentState;
}

switchLight.addEventListener('click', turnOnOffLight);
