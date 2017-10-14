const fs = require('fs');
const createData = require('./CreateData');
const config = require('./../dummy-content-config.js');

/**
 * Create object arrays from the CreateData method
 * Writes those results to json files.
 * @param {Object} input
 *     {
 *          name: {String},
 *          items: {Integer},
 *          schema: {Object}
 *      }
 * @returns {Void}
 */
const WriteFile = (input) => {

    const data = createData(input),
          json = JSON.stringify(data, null, 4),
          directory = config.outputPath || '.';

    let filename = '',
        output = '';

    if (!fs.existsSync(directory)) {
        fs.mkdir(directory);
    }

    filename = `${directory}/${input.name}Data.json`;
    output = `
        {
            "${input.name}" : ${json}
        }
    `;

    fs.writeFileSync(filename, output);
};

module.exports = WriteFile;
