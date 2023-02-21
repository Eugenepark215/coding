'use strict';
exports.__esModule = true;
function createUser() {
  var randomChance = Math.random() >= 0.5;
  if (randomChance) {
    return { id: 1, username: 'nikko' };
  } else {
    return 'Could not create a user.';
  }
}
// eslint-disable-next-line
var userData = createUser();
