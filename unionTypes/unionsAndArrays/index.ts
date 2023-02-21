function formatListings(listings: (string | number)[]) {
  // eslint-disable-next-line
  return listings.map(listing => {
    if (typeof listing === 'string') {
      return listing.toUpperCase();
    }

    if (typeof listing === 'number') {
      return `$${listing.toLocaleString()}`;
    }
  });
}

const result = formatListings([
  '123 Main St',
  226800,
  '580 Broadway Apt 4a',
  337900
]);

// eslint-disable-next-line no-console
console.log(result);
export {};
