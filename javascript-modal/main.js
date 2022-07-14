
// add event listener to "Open Modal" button
var open = document.querySelector('.button');

var modalEl = document.querySelector('#myModal');
var modalElContent = document.querySelector('.modal-content-off');
// create class "hidden-modal: dispay: none;"

function showModal() {
  modalEl.className = 'modal modal-on';
  modalElContent.className = 'modal modal-content-on';
}

open.addEventListener('click', showModal);

// add event listener to the button in the modal ("NO")
// on click => change modal's class to "modal hidden-modal"
var close = document.querySelector('.close-button');

function hideModal() {
  modalEl.className = 'modal modal-off';
  modalElContent.className = 'modal modal-content-off';
}
close.addEventListener('click', hideModal);
