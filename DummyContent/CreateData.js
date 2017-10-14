const loremIpsum = require('lorem-ipsum');

/**
 * Creates an Object based on the schema specified
 * by the datasets in the config file.
 * @param {Object} dataset
 *      {
 *          name: {String},
 *          items: {Integer},
 *          schema: {Object}
 *      }
 * 
 * @returns {Array<object:schema>}
 */
const CreateData = (dataset) => {
    let output = [];
    let set;

    // Creates an object with dummy data based on schema.
    // One object per the number defined for this set in the config.
    for (var i = 0; i <= dataset.items; i++) {
        set = {};
        
        // Generate content/data for each property in schema 
        Object.keys(dataset.schema).forEach((key) => {
            set[key] = loremIpsum(dataset.schema[key]);
        });

        output.push(set);
    }

    return output;
}

module.exports = CreateData;
