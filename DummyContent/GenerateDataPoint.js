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

            case 'image':
                data = this.imageSrcGen(params);
                break;

            case 'date':
                data = this.dateGen(params);
                break;

            case 'coordinates':
                data = this.coordinatesGen(params);
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

    /**
     * Generates the image src code between a set x/y size
     * using the free placeholder image service placeholder.com
     * @param {Object} params 
     *      possible props...
     *      {
     *          xMin: {Integer},
     *          xMax: {Integer},
     *          yMin: {Integer},
     *          yMax: {Integer}
     *      }
     * @returns {String}
     */
    static imageSrcGen(params) {
        const base = 'http://via.placeholder.com';

        const xRange =  [(params.xMin || 1), (params.xMax || 999)];
        const yRange =  [(params.yMin || 1), (params.yMax || 999)];

        const x = Math.ceil((Math.random() * xRange[1]) + xRange[0]);
        const y = Math.ceil((Math.random() * yRange[1]) + yRange[0]);

        return `${base}/${x}x${y}`;
    }

    /**
     * Generates a date in the m/dd/yy format
     * If the to and from params are empty, todays date will be used.
     * If locale is empty, a normal date object is returned.
     * @param {Object} params
     *      possible props...
     *      {
     *          from: {Date},
     *          to: {Date},
     *          locale: {String}
     *      }
     * @returns {String}
     */
    static dateGen(params) {
        let date;

        if (!params.from || !params.to) {
            date = new Date();
        } else {
            date = new Date(params.from.getTime() + Math.random() 
                    * (params.to.getTime() - params.from.getTime()));
        }

        if (params.locale && params.locale != '') {
            date = date.toLocaleDateString(params.locale);
        }

        return date;
    }

    /**
     * Generates a set of latitude and longitude
     * @param {Object} params
     *      possible props...
     *      {
     *          latMin: {Number (-90 to 90)},
     *          latMax: {Number (-90 to 90)},
     *          lonMin: {Number (-180 to 180)}
     *          lonMax: {Number (-180 to 180)}
     *      }
     * @returns {Array<number>} [lat, lon] 
     */
    static coordinatesGen(params) {
        const latitutde = [-90, 90];
        const longitude = [-180, 180];

        // Validate that the params are within range
        // And set correct it, or set the min/max as defaults.
        if (params.latMin < latitutde[0] || !params.latMin) {
            params.latMin = latitutde[0];
        }

        if (params.latMax > latitutde[1] || !params.latMax) {
            params.latMax = latitutde[1];
        }

        if (params.lonMin < longitude[0] || !params.lonMin) {
            params.lonMin = longitude[0];
        }

        if (params.lonMax > longitude[1] || !params.lonMax) {
            params.lonMax = longitude[1];
        }

        const lat = ((Math.random() * params.latMax) + params.latMin).toFixed(6);
        const lon = ((Math.random() * params.lonMax) + params.lonMin).toFixed(6);
        
        return [lat, lon];
    }

}

module.exports = GenerateDataPoint;
