
var elContactForm = document.querySelector('#contact-form');

var userName = elContactForm.elements.name.value;
// document.querySelector('#user-name').elements;

var userEmail = elContactForm.elements.email.value;
// document.querySelector('#user-email').elements;

var userMessage = elContactForm.elements.message.value;
// document.querySelector('#user-message').elements;

function getValues(event) {
  event.preventDefault();
  var newObj = {};
  newObj.name = userName;
  newObj.email = userEmail;
  newObj.userMessage = userMessage;

  // return newObj;
  console.log(newObj);

}

elContactForm.addEventListener('submit', getValues);

elContactForm.reset();
