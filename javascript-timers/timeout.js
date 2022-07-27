var textEl = document.querySelector('.message');

function textChange() {
  textEl.textContent = 'Hello There';
}

setTimeout(textChange, 2000);
