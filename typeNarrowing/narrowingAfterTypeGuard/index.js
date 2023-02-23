var iron = {
  magnetize: function () { return 'Electromagnet activated'; }
};
var bottle = {
  melt: function () { return 'Furnace set to 2,700 degrees'; }
};
function recycle(trash) {
  if ('magnetize' in trash) {
    return trash.magnetize();
  }
  return trash.melt();
}
// eslint-disable-next-line no-console
console.log(recycle(iron));
// eslint-disable-next-line no-console
console.log(recycle(bottle));
