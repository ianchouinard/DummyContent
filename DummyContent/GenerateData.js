const stringGen = require('./generators/StringGen');
const integerGen = require('./generators/IntegerGen');
const booleanGen = require('./generators/BooleanGen');

/**
 * Routes the schema properties to the appropriate
 * method to generate data. Returns the result.
 * @param {Object} params
 *      Is the schema object for a dataset.
 * 
 * @returns {String || Integer || Boolen}
 */
const GenerateData = (params) => {
    let data;

    switch (params.type) {
        case 'string':
            data = stringGen(params);
            break;

        case 'integer':
            data = integerGen(params);
            break;

        case 'boolean':
            data = booleanGen();
            break;
            
        default:
            console.error(`Invalid type "${params.type}"`);
            return;
    }

    return data;
};

module.exports = GenerateData;
