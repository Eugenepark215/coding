var siameseCat = {
  name: 'Proxie',
  run: function () { return 'pitter pat'; }
};
var bettaFish = {
  name: 'Neptune',
  swim: function () { return 'bubble blub'; }
};
function move(pet) {
  if ('run' in pet) {
    return pet.run();
  } else if ('swim' in pet) {
    return pet.swim();
  }
}
// eslint-disable-next-line no-console
console.log(move(siameseCat));
// eslint-disable-next-line no-console
console.log(move(bettaFish));
