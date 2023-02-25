// Write an interface here

function updateRunGoal(run) {
  // eslint-disable-next-line no-console
  console.log(`
Miles left:       ${50 - run.miles}
Percent of goal:  ${(run.miles / 50) * 100}% complete
  `);
}

updateRunGoal({
  miles: 5
});
