var fettuccine = {
  menuName: 'Fettuccine',
  boil: function () { return 'Heat water to 212 degrees'; }
};
var steak = {
  menuName: 'New York Strip Steak',
  panFry: function () { return 'Heat oil to 350 degrees'; }
};
function prepareEntree(entree) {
  if ('boil' in entree) {
    return entree.boil();
  } else {
    return entree.panFry();
  }
}
// eslint-disable-next-line no-console
console.log(prepareEntree(fettuccine));
// eslint-disable-next-line no-console
console.log(prepareEntree(steak));
