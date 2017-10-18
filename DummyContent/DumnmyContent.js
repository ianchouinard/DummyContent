const fs = require('fs');
const config = require('./../DummyContentConfig.js');
const GenerateDataPoint = require('./GenerateDataPoint');

class DummyContent {

    /**
     * Initialize the program and status logging.
     * @returns {Void}
     */
    static main() {
        for (let dataset of config.dataSets) {
            console.log(`---- Creating ${dataset.name} ----`);
            this.writeFile(dataset);
        }
        
        console.log('----------------------------------------------------------------');
        console.log(`Dummy Content has finished creating ${config.dataSets.length} data sets`);
        console.log('----------------------------------------------------------------');
    }

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
    static writeFile(input) {
        const data = this.createObject(input),
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
    }

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
    static createObject(dataset) {
        let output = [];
        let set;
    
        // Creates an object with dummy data based on schema.
        // One object per the number defined for this set in the config.
        for (let i = 0; i <= dataset.items; i++) {
            set = {};
            
            // Generate content/data for each property in schema 
            Object.keys(dataset.schema).forEach((key) => {
                set[key] = GenerateDataPoint.generate(dataset.schema[key]);
            });
    
            output.push(set);
        }
    
        return output;
    }

}

module.exports = DummyContent;
