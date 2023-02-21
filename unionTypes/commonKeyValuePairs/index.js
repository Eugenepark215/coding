'use strict';
exports.__esModule = true;
function getFriendNameFromEvent(event) {
  return event.displayName || event.username;
}
var newEvent = {
  username: 'vkrauss',
  displayName: 'Veronica Krauss'
};
var friendName = getFriendNameFromEvent(newEvent);
// eslint-disable-next-line no-console
console.log('You have an update from '.concat(friendName, '.'));
