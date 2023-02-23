function formatStatistic(stat: string | number) {
  if (typeof stat === 'number') {
    return stat.toFixed(2);
  } else if (typeof stat === 'string') {
    return stat.toUpperCase();
  }
}

// eslint-disable-next-line no-console
console.log(formatStatistic('Win'));
// eslint-disable-next-line no-console
console.log(formatStatistic(0.364));
