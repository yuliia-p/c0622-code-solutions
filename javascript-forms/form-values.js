
var elContactForm = document.querySelector('#contact-form');

// var userName = elContactForm.elements.name.value;
// // document.querySelector('#user-name').elements;

// var userEmail = elContactForm.elements.email.value;
// // document.querySelector('#user-email').elements;

// var userMessage = elContactForm.elements.message.value;
// // document.querySelector('#user-message').elements;

function getValues(event) {
  event.preventDefault();
  var newObj = {};
  newObj.name = elContactForm.elements.name.value;
  newObj.email = elContactForm.elements.email.value;
  newObj.userMessage = elContactForm.elements.message.value;
  // console.log(newObj);
  elContactForm.reset();
}

elContactForm.addEventListener('submit', getValues);
