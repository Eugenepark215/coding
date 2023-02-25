function getUserName(options) {
  if (options.firstName && options.lastName) {
    // eslint-disable-next-line
        return console.log("".concat(options.firstName, " ").concat(options.lastName));
  }
  // eslint-disable-next-line
    return console.log(options.username);
}
getUserName({
  firstName: 'Mr.',
  lastName: 'Oshiro',
  username: 'hotelowner304'
});
getUserName({
  firstName: 'Madeline',
  username: 'mountainClimber'
});
