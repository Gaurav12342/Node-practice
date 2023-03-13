const fs = require("fs");

const createFile = (name, contents) => {
    fs.writeFileSync(name, contents);
    console.log("File Written");
}

module.exports = {
    createFile
}