/* exported compact */
function compact(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

// function should: omit false, null, NaN, 0, -0, undefined, '' from arrays and only add truthy values;
// since conditional (such as if statements) return boolean (true/false), I can just do "if (array[i]";
// this will determine whether array[i] is true/false (truthy/falsy value);
// since I can't use methods, just leave the if statement without and else statement so that it only adds the truthy values to the newArray;
