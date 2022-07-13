
function handleFocus(event) {
  console.log('focus event fired');
  console.log(event.target.name);
  console.log(event.target.value);
}

// var a = document.forms.elements[0].name;
// console.log(a);

function handleBlur(event) {
  console.log('blur event fired');
  console.log(event.target.name);
  console.log(event.target.value);
}

function handleInput(event) {
  console.log('event.target.name', event.target.name);
  console.log('event.target.value', event.target.value);
}

var elNameInput = document.querySelector('#user-name');
// document.forms.name;
var elEmailInput = document.querySelector('#user-email');

var elTextInput = document.querySelector('#user-message');

elNameInput.addEventListener('focus', handleFocus);

elEmailInput.addEventListener('blur', handleBlur);

elTextInput.addEventListener('input', handleInput);
