const fs = require("fs");
const path = require("path");

function writeToFile(data) {
  const targetPath = path.resolve(__dirname, `../examples/logo.svg`);

  fs.writeFile(targetPath, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Generated logo.svg. 🎉");
    }
  });
}

module.exports = writeToFile;
