const loremIpsum = require('lorem-ipsum');
const config = require('./dummy-content-config.js');
const writeFile = require('./DummyContent/WriteFile.js');

for (let dataset of config.dataSets) {
    console.log(`---- Creating ${dataset.name} ----`);
    writeFile(dataset);
}

console.log('----------------------------------------------------------------');
console.log(`Dummy Content has finished creating ${config.dataSets.length} data sets`);
console.log('----------------------------------------------------------------');