/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */

function isUnderFive(number) {
  return (number < 5);
}

function isEven(number) {
  return ((number % 2) === 0);
}

function startsWithJ(string) {
  return (string.charAt(0) === 'J');
}

function isOldEnoughToDrink(person) {
  return (person.age >= 21);
}

function isOldEnoughToDrive(person) {
  return (person.age >= 16);
}

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

function categorizeAcidity(pH) {
  if (pH === 7) {
    console.log('neutral');
  } else if (pH < 7 && pH > -1) {
    console.log('acid');
  } else if (pH > 7 && pH < 15) {
    console.log('base');
  } else {
    console.log('invalid pH level');
  }
}

function introduceWarnerBro(name) {
  switch (name) {
    case ('yakko'):
      console.log("We're the warner brothers!");
      break;
    case ('wakko'):
      console.log("We're the warner brothers!");
      break;
    case 'dot':
      console.log("I'm cute~");
      break;
    default:
      console.log('Goodnight everybody!');
  }
}

function recommendMovie(genre) {
  switch (genre) {
    case ('action'):
      console.log('Rush Hour 2');
      break;
    case ('comedy'):
      console.log('Bridesmaids');
      break;
    case ('horror'):
      console.log('Conjuring');
      break;
    case ('drama'):
      console.log('The Right Stuff');
      break;
    case ('musical'):
      console.log('Les Miserables');
      break;
    case ('sci-fi'):
      console.log('Men in Black');
      break;
    default:
      console.log('Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi');
  }
}
