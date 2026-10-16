const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRING PLUS 00 PLUS 00 PLUS ** STRINGPLUS00PLUS00PLUS** STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {

  const { repeatTimes = 1, separator = '+', addition, additionRepeatTimes = 1, additionSeparator = '|' } = options;

  const main = String(str)

  const additionStr = addition !== undefined ? String(addition) : '';

  const subResult = Array(additionRepeatTimes).fill(additionStr).join(additionSeparator);

  return Array(repeatTimes).fill(main + subResult).join(separator)
}

repeater('TESTstr', { separator: 'ds', addition: 'ADD!', additionSeparator: ')))000' })

module.exports = {
  repeater
};
