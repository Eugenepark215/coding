'use strict';
exports.__esModule = true;
function formatValue(value) {
  if (typeof value === 'string') {
    // eslint-disable-next-line no-console
    console.log(value.toLowerCase());
  } else if (typeof value === 'number') {
    // eslint-disable-next-line no-console
    console.log(value.toFixed(2));
  }
}
formatValue('Hiya');
formatValue(42);
