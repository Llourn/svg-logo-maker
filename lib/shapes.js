class Shape {
  constructor(color) {
    this.color = color;
  }
}

class Circle extends Shape {
  constructor(color) {
    super(color);
  }

  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  constructor(color) {
    super(color);
  }

  render() {
    return `<rect x="75" y="25" width="150" height="150" fill="${this.color}" />`;
  }
}

class Triangle extends Shape {
  constructor(color) {
    super(color);
  }

  render() {
    return `<polygon points="150 25 235 175 65 175" fill="${this.color}" />`;
  }
}

const generateShape = (shape, color) => {
  switch (shape) {
    case "circle":
      return new Circle(color).render();

    case "square":
      return new Square(color).render();

    case "triangle":
      return new Triangle(color).render();

    default:
      break;
  }
};

module.exports = { Circle, Square, Triangle, generateShape };
