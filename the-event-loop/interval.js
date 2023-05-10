let count = 3;
const myInterval = setInterval(() => {
  console.log(count);
  count--;
  if (count === 0) {
    console.log('Blast off!');
    clearInterval(myInterval);
  }
}, 1500);
