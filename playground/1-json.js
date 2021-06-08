const fs = require('fs');

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday'
// };

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON);
// const dataBuffer = fs.readFileSync('./1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);

// console.log(data.title);
const dataBuffer = fs.readFileSync('./1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
console.log(dataBuffer);
console.log(dataJSON);
console.log(data);
data.name = 'Jay';
data.planet = 'Mars';
data.age = 35;

const newData = JSON.stringify(data);

fs.writeFileSync('./1-json.json', newData);
