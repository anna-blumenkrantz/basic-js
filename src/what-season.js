const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if(!date) {
    throw new Error('Unable to determine the time of year!');
  }
  // if (!(date instanceof Date) || isNaN(date) || date.toString() !== new Date(date).toString() || typeof date[Symbol.toStringTag] !== 'string' || date[Symbol.toStringTag] !== 'Date') {
  //   throw new Error('Invalid date!');
  // }
  // Additional checks for date object properties
  if (
    typeof date.getMonth !== 'function' ||
    typeof date.getFullYear !== 'function' ||
    typeof date.getDate !== 'function' ||
    typeof date.getHours !== 'function' ||
    typeof date.getMinutes !== 'function' ||
    typeof date.getSeconds !== 'function' ||
    typeof date.getMilliseconds !== 'function' ||
    typeof date.getDay !== 'function'
  ) {
    throw new Error('Invalid date!');
  }

  const month = date.getMonth();
  if (month >= 0 && month <= 1 || month === 11) {
    return 'winter';
  } else if (month >= 2 && month <= 4) {
    return 'spring';
  } else if (month >= 5 && month <= 7) {
    return 'summer';
  } else if (month >= 8 && month <= 10) {
    return 'autumn';
  } else {
    throw new Error('Invalid date!');
  }
}
getSeason(new Date(2019, 11, 22, 23, 45, 11, 500));

module.exports = {
  getSeason
};
