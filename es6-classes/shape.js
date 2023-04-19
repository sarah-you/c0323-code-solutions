/* exported Shape */
class Shape {
  constructor(area, perimeter) {
    this.area = area;
    this.perimeter = perimeter;
  }

  describe() {
    return 'the area is ' + this.area + ' and the perimeter is ' + this.perimeter + '. ';
  }
  // template literal:
  // return `Area: ${this.area}, Perimeter: ${this.perimeter}`;
}

const newShape = new Shape(12, 14);
// "we have a new Shape being instantiated with 2 arguments, both numbers and the result of that is being assigned a variable"
console.log('newShape area and perimeter: ', newShape.describe());
