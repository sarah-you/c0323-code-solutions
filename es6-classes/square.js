/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Square */
class Square extends Shape {
  constructor(width) {
    super(width * width, width + width + width + width);
    this.width = width;
  }

  describe() {
    return super.describe() + 'The width of the Square is ' + this.width + '. ';
  }
}

const newSquare = new Square(4);
console.log('newSquare description: ', newSquare.describe());
