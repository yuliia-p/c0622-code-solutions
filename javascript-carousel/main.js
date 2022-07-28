var rightArrow = document.querySelector('.fa-chevron-right');
var dotContEl = document.querySelector('.dots'); // dot container
var iElements = document.querySelectorAll('.fa-circle'); // all dots NodeList
var imgEls = document.querySelectorAll('.img'); // img node list
var lefttArrow = document.querySelector('.fa-chevron-left');
var currentIndex = 0;

lefttArrow.addEventListener('click', prevImgRight);
rightArrow.addEventListener('click', nextImage);
// previous
function prevImgRight(event) {
  // when currentIndex becomes 0, jump back to finish
  if (currentIndex === 0) {
    imgEls[currentIndex].className = 'img display-none';
    imgEls[imgEls.length - 1].className = 'img';
    iElements[currentIndex].className = 'fa-solid fa-circle';
    iElements[imgEls.length - 1].className = 'fa-solid fa-circle current';
    currentIndex = imgEls.length - 1;
  } else {
    // continue to step left (decrease current index)
    imgEls[currentIndex].className = 'img display-none';
    imgEls[currentIndex - 1].className = 'img';
    iElements[currentIndex].className = 'fa-solid fa-circle';
    iElements[currentIndex - 1].className = 'fa-solid fa-circle current';
    currentIndex--;
  }
}

dotContEl.addEventListener('click', clickOnDot);

function clickOnDot(event) {
  if (event.target.tagName === 'I') {
    var buttonId = event.target.getAttribute('data-icon'); // 1-5; id of i el
    var newIndex = buttonId - 1;
    imgEls[currentIndex].className = 'img display-none';
    imgEls[newIndex].className = 'img';
    iElements[currentIndex].className = 'fa-solid fa-circle';
    iElements[newIndex].className = 'fa-solid fa-circle current';
    currentIndex = newIndex;
  }
  clearInterval(setInterval(nextImage, 3000));
}

setInterval(nextImage, 3000);
// 0 1 2 3 4 -> index
// 1 2 3 4 5 -> length
function nextImage(event) {

  if (currentIndex === imgEls.length - 1) {
    // jump back to 0
    imgEls[currentIndex].className = 'img display-none';
    imgEls[0].className = 'img';
    iElements[currentIndex].className = 'fa-solid fa-circle';
    iElements[0].className = 'fa-solid fa-circle current';
    currentIndex = 0;
  } else {
    // next image
    imgEls[currentIndex].className = 'img display-none';
    imgEls[currentIndex + 1].className = 'img';
    iElements[currentIndex].className = 'fa-solid fa-circle';
    iElements[currentIndex + 1].className = 'fa-solid fa-circle current';
    currentIndex++;
  }
}
