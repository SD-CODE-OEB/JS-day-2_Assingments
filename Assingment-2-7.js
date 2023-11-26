//A JavaScript function that takes a string as a parameter and counts the no.of vowels.

function countVowels(str) {
    let vowels = "aeiouAEIOU";
  let count = 0;
  
  for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    } 
  return count;
}

//calling the function.
console.log(countVowels("hello"));
console.log(countVowels("javascript"));
console.log(countVowels("Shoeb"));
console.log(countVowels("Uddin"));