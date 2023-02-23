type Pasta = {
  menuName: string;
  boil: () => string;
}

type Meat = {
  menuName: string;
  panFry: () => string;
}

const fettuccine = {
  menuName: 'Fettuccine',
  boil: () => 'Heat water to 212 degrees'
};

const steak = {
  menuName: 'New York Strip Steak',
  panFry: () => 'Heat oil to 350 degrees'
};

function prepareEntree(entree: Pasta | Meat) {
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
