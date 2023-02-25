import { getBudgetAsync } from './api';

// Write an interface here
interface Budget {
  [category:string]: number;
}
async function getBudget() {
  const result: Budget = await getBudgetAsync();
  // eslint-disable-next-line no-console
  console.log(result);
}

getBudget();
