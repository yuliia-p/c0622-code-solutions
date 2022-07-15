
function handleFocus(event) {
  console.log('focus event fired');
  console.log(event.target.name);
  console.log(event.target.value);
}

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

var elEmailInput = document.querySelector('#user-email');

var elTextInput = document.querySelector('#user-message');

elNameInput.addEventListener('focus', handleFocus);
elNameInput.addEventListener('blur', handleBlur);
elNameInput.addEventListener('input', handleInput);

elEmailInput.addEventListener('focus', handleFocus);
elEmailInput.addEventListener('blur', handleBlur);
elEmailInput.addEventListener('input', handleInput);

elTextInput.addEventListener('focus', handleFocus);
elTextInput.addEventListener('blur', handleBlur);
elTextInput.addEventListener('input', handleInput);
