// global variables
const intervalId = null;
let count = 1;
const $navIcon1 = document.querySelector('.one');
const $navIcon2 = document.querySelector('.two');
const $navIcon3 = document.querySelector('.three');
const $navIcon4 = document.querySelector('.four');
const $navIcon5 = document.querySelector('.five');

// automatic carousel slideshow every 3 seconds -- swaps the photo and circle progress icon
setInterval(function () {
  count++;
  if (count === 2) {
    const $slide2img = document.querySelector('img');
    $slide2img.setAttribute('src', 'images/039.png');
    $navIcon1.setAttribute('class', 'one fa-regular fa-circle');
    $navIcon2.setAttribute('class', 'two fa-solid fa-circle');
  }
  if (count === 3) {
    const $slide3img = document.querySelector('img');
    $slide3img.setAttribute('src', 'images/001.png');
    $navIcon2.setAttribute('class', 'two fa-regular fa-circle');
    $navIcon3.setAttribute('class', 'three fa-solid fa-circle');
  }
  if (count === 4) {
    const $slide4img = document.querySelector('img');
    $slide4img.setAttribute('src', 'images/004.png');
    $navIcon3.setAttribute('class', 'three fa-regular fa-circle');
    $navIcon4.setAttribute('class', 'fa-solid fa-circle');
  }
  if (count === 5) {
    const $slide5img = document.querySelector('img');
    $slide5img.setAttribute('src', 'images/007.png');
    $navIcon4.setAttribute('class', 'fa-regular fa-circle');
    $navIcon5.setAttribute('class', 'fa-solid fa-circle');
    clearInterval(intervalId);
  }
}, 3000);
