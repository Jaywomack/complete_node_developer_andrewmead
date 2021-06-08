const fs = require('fs');

const notes = fs.readFileSync('./notes.txt');

module.exports = notes;
