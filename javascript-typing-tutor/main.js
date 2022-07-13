/*
<div>
<span class="w">w</span>
<span class="o">o</span>
<span class="r">r</span>
<span class="d">d</span>
</div>

var string = 'word';
var index = 0;
var errorCount = 0

function (event) {
var letter = string[index];
var input = event.key;
var el = document.querySelector(letter);

// check if letter is correct
if (letter === input) {
  // add class to make it green
  el.className = letter + ' green';
  index++;
  // increase index by 1
}
else {
  // add class to make it red
  // add errorCount + 1
  el.className = letter + ' red';
  errorCount++;
}

}

errorCount out of string.length
*/
