let counter = 4;
const intervalId = setInterval(function () {
  --counter;
  const $h1 = document.querySelector('.countdown-display');
  $h1.textContent = counter;
  if (counter === 0) {
    $h1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalId);
  }
}, 1000);
