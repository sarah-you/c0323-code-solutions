/* exported Shape */
class Shape {
  constructor(area, perimeter) {
    this.area = area;
    this.perimeter = perimeter;
  }

  describe() {
    return 'the area is ' + this.area + ' and the perimeter is ' + this.perimeter + '. ';
  }
}

const newShape = new Shape(12, 14);
console.log('newShape area and perimeter: ', newShape.describe());
