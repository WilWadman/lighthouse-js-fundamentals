// Defining the intitial function "merge"

let merge = function(arr1, arr2){
// input for the function is 2 arrays containing sorted numbers
// we need to combine the arrays in order so the new array is sorted 
// we will need to use the .concat to add the number from one array to another 
// we need some sort of way to check the intergers from one array vs the second array  to determine where in the index they go
// for loop to go through the arrays indexs'
  var arr3 = [];
  arr3 = arr1.concat(arr2)
  for (var i = 0; i < arr3.length; i++){
// next we want to combine the arrays the run sort on them
  return arr3.sort();
}
  return arr3;

}











  
console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);