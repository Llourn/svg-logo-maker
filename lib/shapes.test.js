const { Circle, Square, Triangle } = require("./shapes.js");

describe("Shapes", () => {
  it("should render a triangle with the color red", () => {
    const triangle = new Triangle("red");
    expect(triangle.render()).toEqual(
      '<polygon points="150 25 235 175 65 175" fill="red" />'
    );
  });

  it("should render a square with the color red", () => {
    const triangle = new Square("red");
    expect(triangle.render()).toEqual(
      '<rect x="75" y="25" width="150" height="150" fill="red" />'
    );
  });

  it("should render a circle with the color red", () => {
    const triangle = new Circle("red");
    expect(triangle.render()).toEqual(
      '<circle cx="150" cy="100" r="80" fill="red" />'
    );
  });
});
