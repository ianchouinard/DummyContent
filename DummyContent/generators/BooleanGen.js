/**
 * Generates a boolean type data based on params 
 * specified for this property in the config.
 * @returns {Boolean}
 */
const BooleanGen = () => {
    return (Math.floor(Math.random() * 2) == 0);
}

module.exports = BooleanGen;
