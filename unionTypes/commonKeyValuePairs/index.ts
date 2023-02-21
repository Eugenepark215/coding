type Like = {
  username: string;
  displayName: string;
};

type Share = {
  username: string;
  displayName: string;
};

function getFriendNameFromEvent(event : Like | Share) {
  return event.displayName || event.username;
}

const newEvent = {
  username: 'vkrauss',
  displayName: 'Veronica Krauss'
};

const friendName = getFriendNameFromEvent(newEvent);
// eslint-disable-next-line no-console
console.log(`You have an update from ${friendName}.`);

export {};
