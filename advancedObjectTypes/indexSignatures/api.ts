// eslint-disable-next-line
export async function getBudgetAsync(): Promise<any> {
  // eslint-disable-next-line
  return new Promise((resolve, _) => {
    resolve({
      shopping: 150,
      food: 210,
      utlities: 100
    });
  });
}
