// imports all the modules with functions
import add from './add.js';
import subtract from './subtract.js';
import multiply from './multiply.js';
import quotient from './divide.js';

if (process.argv[3] === 'plus') {
  console.log(add(+process.argv[2], +process.argv[4]));
} else if (process.argv[3] === 'minus') {
  console.log(subtract(+process.argv[2], +process.argv[4]));
} else if (process.argv[3] === 'times') {
  console.log(multiply(+process.argv[2], +process.argv[4]));
} else if (process.argv[3] === 'over') {
  console.log(quotient(+process.argv[2], +process.argv[4]));
}

// create a conditional so that command line can do the actual calculation;
// in order to display anything in terminal, must use console.log;
// in the terminal: node calculate.js 4 plus 4
// node = command
// calculate/calculate.js = file
// 4 = process.argv[2]; this is one of the parameters in the files' functions
// plus = process.argv[3]; this is the word used to do the calculation in the command line
// 4 = process.argv[4]; this is one of the parameters in the files' functions
// Since we're doing node command in calculate.js file, we need to add conditional inside this file;
// now create conditional to do each of the module's functions on calculate.js
