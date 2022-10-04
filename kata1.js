let num1 = 0;
let num2 =0;
let newArr = [];
const sumLargestNumbers = function(data) {

  for( let i = 0; i < data.length; i++) {
  if (data[i] > num1)
  {num1 = data[i]
    
    newArr[0] = num1
  }
}

for (let h = 0; h < data.length; h++){
  if ((data[h] < newArr[0]) && (data[h] > num2))
  { num2 = data[h]
    newArr[1] = num2}
  }
  console.log(newArr)
  return "The sum of the two largest numers is " +(newArr[0]+newArr[1]);
}
console.log(sumLargestNumbers([1,2,3]));