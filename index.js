const inquirer = require("inquirer");
const questions = require("./lib/prompt.js");
const writeToFile = require("./lib/output.js");
const { Circle, Square, Triangle } = require("./lib/shapes.js");

function start() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      let svg = `
<svg
version="1.1"
width="300"
height="200"
xmlns="http://www.w3.org/2000/svg"
>
  ${generateShape(answers.shape, answers.shapeColor)}

  <text x="151" y="120" font-size="60" text-anchor="middle" fill="${
    answers.textColor
  }">
    ${answers.text ? answers.text.trim() : ""}
  </text>
</svg>
      `;
      writeToFile(svg);
    })
    .catch((error) => {
      if (error.isTyError) {
        // prompt couldn't be rendered in the current environment.
      } else {
        console.log(error);
      }
    });
}

start();

function generateShape(shape, color) {
  switch (shape) {
    case "circle":
      const circle = new Circle(color);
      return circle.render();

    case "square":
      const square = new Square(color);
      return square.render();

    case "triangle":
      const triangle = new Triangle(color);
      return triangle.render();

    default:
      break;
  }
}
