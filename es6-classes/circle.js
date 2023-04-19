/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */
class Circle extends Shape {
  constructor(radius) {
    super(Math.PI * Math.pow(radius, 2), Math.PI * radius * 2);
    this.radius = radius;
  }

  describe() {
    return super.describe() + 'The radius of the Circle is ' + this.radius + '. ';
  }
}

const newCircle = new Circle(3);
console.log('newCircle description: ', newCircle.describe());
