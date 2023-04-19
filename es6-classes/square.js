/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Square */
class Square extends Shape {
  // "we have a new class Square being defined and it's being extends from Shape"
  constructor(width) {
    super(width * width, width + width + width + width);
    this.width = width;
  }

  describe() {
    return super.describe() + 'The width of the Square is ' + this.width + '. ';
  }
  // template literal:
  // return `${super.describe()}, Width: ${this.wdith}`;
}

const newSquare = new Square(4);
// "we have a new Square being instantiated with a number and the result of that is being assigned a variable"
console.log('newSquare description: ', newSquare.describe());
