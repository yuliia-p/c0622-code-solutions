var el = document.querySelectorAll('span');

document.addEventListener('keydown', typingTutor);
var index = 0;

function typingTutor(event) {
  var letter = el[index].textContent;
  if (letter === event.key) {
    el[index].className = 'letter green';
    el[index].className = 'etter green underline';
    index++;

  } else {
    el[index].className = 'letter red';
    el[index].className = 'etter red underline';
  }
}
