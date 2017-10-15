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
const IntegerGen = (params) => {
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

module.exports = IntegerGen;
