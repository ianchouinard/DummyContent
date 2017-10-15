const loremIpsum = require('lorem-ipsum');

/**
 * Generates string type data based on params 
 * specified for this property in the config.
 * Generates content using the loremIpsum module.
 * @param {Object} params
 *      possible props...
 *      {
 *          stringType: {String},
 *          min: {Integer},
 *          max: {Integer},
 *          count: {integer}
 *      }
 * 
 * @returns {String}
 */
const StringGen = (params) => {
    let ipsumConfig = {};

    // Construct loremIpsum settings
    switch (params.stringType) {
        case 'paragraphs':
            ipsumConfig.units = 'paragraphs';
            ipsumConfig.paragraphLowerBound = params.min;
            ipsumConfig.paragraphUpperBound = params.max;
            break;

        case 'sentences':
            ipsumConfig.units = 'sentences';
            ipsumConfig.sentenceLowerBound = params.min;
            ipsumConfig.sentenceUpperBound = params.max;
            break;

        default:
            ipsumConfig.units = 'words';
            break;
    }

    if (params.count) {
        ipsumConfig.count = params.count;
    }

    return loremIpsum(ipsumConfig);
}

module.exports = StringGen;
