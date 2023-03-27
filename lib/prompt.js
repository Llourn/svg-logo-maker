const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter up to 3 characters.",
  },
  {
    type: "input",
    name: "textColor",
    message: "Color of the text. (color keyword or hex value)",
  },
  {
    type: "list",
    name: "shape",
    message: "Choose a shape.",
    choices: ["circle", "square", "triangle"],
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Color of the shape. (color keyword or hex value)",
  },
];

module.exports = questions;
