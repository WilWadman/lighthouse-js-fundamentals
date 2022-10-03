
  const veggieList = [
    {
      submitter: 'Old Man Franklin',
      redness: 10,
      plumpness: 5
    },
    {
      submitter: 'Sally Tomato-Grower',
      redness: 2,
      plumpness: 8
    },
    {
      submitter: 'Hamid Hamidson',
      redness: 4,
      plumpness: 3
    }
  ]
  
  const metric = 'redness'
  const judgeVegetable = function (veggieList, metric){
    let bestVeggie = veggieList[0];
    for (let i = 0; i < veggieList.length; i++){
       if (veggieList[i][metric] > bestVeggie[metric]){
        bestVeggie = veggieList[i];
      }
     }
    return bestVeggie.submitter
  }
