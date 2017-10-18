const loremIpsum = require('lorem-ipsum');

class GenerateDataPoint {

    /**
     * Routes the schema properties to the appropriate
     * method to generate data. Returns the result.
     * @param {Object} params
     *      Is the schema object for a dataset.
     * 
     * @returns {String || Integer || Boolen}
     */
    static generate(params) {
        let data;

        switch (params.type) {
            case 'string':
                data = this.stringGen(params);
                break;

            case 'integer':
                data = this.integerGen(params);
                break;

            case 'boolean':
                data = this.booleanGen();
                break;

            default:
                console.error(`Invalid type "${params.type}"`);
                return;
        }

        return data;
    }

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
    static stringGen(params) {
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

    /**
     * Generates an int type data based on params 
     * specified for this property in the config.
     * @param {Object} params
     *      possible props...
     *      {
     *          min: {Integer},
     *          max: {Integer},
     *          round: {Boolean}
     *      }
     * 
     * @returns {Integer}
     */
    static integerGen(params) {
        let minMax = [];

        // Set min max.
        // Or set defaults. 0, 999999
        minMax[0] = params.min || 0;
        minMax[1] = params.max || 999999;

        let output = (Math.random() * minMax[1]) + minMax[0];

        // Round the number if the round flag was set
        // for this dataset in the config.
        if (params.round) {
            output = Math.round(output);
        }

        return output;
    }

    /**
     * Generates a boolean type data based on params 
     * specified for this property in the config.
     * @returns {Boolean}
     */
    static booleanGen() {
        return (Math.floor(Math.random() * 2) == 0);
    }

}

module.exports = GenerateDataPoint;
