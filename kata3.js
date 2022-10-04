const numberOfVowels = function(data) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  // Put your solution here
  let vowelCount = 0;
  for (let i = 0; i< data.length; i++) {
    if (vowels.has(data[i])){
      vowelCount++
    }
  }
return vowelCount

};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));