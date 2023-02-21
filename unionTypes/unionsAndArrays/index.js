'use strict';
exports.__esModule = true;
function formatListings(listings) {
  // eslint-disable-next-line
    return listings.map(function (listing) {
    if (typeof listing === 'string') {
      return listing.toUpperCase();
    }
    if (typeof listing === 'number') {
      return '$'.concat(listing.toLocaleString());
    }
  });
}
var result = formatListings([
  '123 Main St',
  226800,
  '580 Broadway Apt 4a',
  337900
]);
// eslint-disable-next-line no-console
console.log(result);
