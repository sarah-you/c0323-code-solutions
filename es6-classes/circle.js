/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */
class Circle extends Shape {
  // "we have a new class Circle being defined and it's being extends from Shape"
  constructor(radius) {
    super(Math.PI * Math.pow(radius, 2), Math.PI * radius * 2);
    this.radius = radius;
  }

  describe() {
    return super.describe() + 'The radius of the Circle is ' + this.radius + '. ';
  }
  // template literal:
  // return `${super.describe()}, Radius: ${this.radius}`;
}

const newCircle = new Circle(3);
// "we have a new Circle being instantiated with a number and the result of that is being assigned a variable"
console.log('newCircle description: ', newCircle.describe());
