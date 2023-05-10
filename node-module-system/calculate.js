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
