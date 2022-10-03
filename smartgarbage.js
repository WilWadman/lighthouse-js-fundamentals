const smartGarbage = function (trash, bins) {
  const keys = Object.keys(bins);
  bins[trash]++

  console.log(bins); // Just for personal use to see outputs.
  return bins;
};

smartGarbage("recycling",{ waste: 4, recycling: 2, compost: 5 }, );