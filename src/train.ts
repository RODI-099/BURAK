// O-TASK:

// Shunday function yozing, u har xil valuelardan iborat array qabul qilsin va array ichidagi sonlar yigindisini hisoblab chiqqan javobni qaytarsin.
// MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]) return 45


function sumOfNumbers(array: (string | number | null)[]) {
    let total = 0;
    for (let value of array) {
        if (typeof value === 'number') {  // Check if the value is a number
            total += value;
        }
    }
    return total;
}
const array = [1, 'a', 3.5, 'hello', 7, null, 2];
const result = sumOfNumbers(array);
console.log(`Example: The sum of the numbers in the array is: ${result}`);

// N-TASK: 

// Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham, orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.
// MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;


// function isPalindrome(str: string) {
//     str = str.toLowerCase();
//     let cleanedStr = str.split('').filter(char => /[a-z0-9]/.test(char)).join('');
//     let reversedStr = cleanedStr.split('').reverse().join('');
//     return cleanedStr === reversedStr;
// }

// console.log(isPalindrome("Aziza")); // true
// console.log(isPalindrome("Hello, World!")); // false
// console.log(isPalindrome("racecar")); // true
// console.log(isPalindrome("No lemon, no melon")); // true


// M-TASK: 

// Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin va array ichidagi har bir raqam uchun raqamni ozi va hamda osha raqamni kvadratidan tashkil topgan object hosil qilib, hosil bolgan objectlarni array ichida qaytarsin.
// MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}];



// function getSquareNumbers(array: any[]) {
//     return array.map(number => {
//         return {
//             number: number,
//             square: number ** 2
//         };
//     });
// }


// const inputArray = [4, 5, 7];
// const result = getSquareNumbers(inputArray);
// console.log(result);







// K-TASK: 

// Shunday function yozing, u string qabul qilsin va string ichidagi unli harflar sonini qaytarsin.
// MASALAN: countVowels("string") return 1;



// function reverseWords(inputString: string) {
//     let words = inputString.split(/\s+/);
//     words = words.filter(word => word.length > 0);
//     let reversedWords = words.map(word => word.split('').reverse().join(''));
//     let result = reversedWords.join(' ');
    
//     return result;
//   }
//   let inputString = " I study at MIT ";
//   let outputString = reverseWords(inputString);
//   console.log(outputString);  
  
  

// K-TASK: 

// Shunday function yozing, u string qabul qilsin va string ichidagi unli harflar sonini qaytarsin.
// MASALAN: countVowels("string") return 1;


// function countVowels(str: string) {
//     const vowels = "aeiouAEIOU";
//     let count = 0;
//     for (let char of inputString) {
//         if (vowels.includes(char)) {
//             count++;
//         }
//     }
//     return count;
// }

// // Example usage:
// const inputString = "Hello, World!";
// console.log(countVowels(inputString)); // Output: 3

// J-TASK: 

// Shunday function yozing, u string qabul qilsin va string ichidagi eng uzun sozni qaytarsin.
// MASALAN: findLongestWord("I come from Uzbekistan") return "Uzbekistan"

// function findLongestWord(str: string) {
  
//   const words = str.split(' ');

//   let longestWord = '';

//   for (let word of words) {
//       const cleanWord = word.replace(/[^\w]/g, '');
//       if (cleanWord.length > longestWord.length) {
//           longestWord = cleanWord;
//       }
//   }

//   // Return the longest word
//   return longestWord;
// }
// const sentence = "I study at MIT";
// console.log(findLongestWord(sentence)); // Output: "study"


// I-TASK:

// Shunday function yozing, u parametridagi array ichida eng kop takrorlangan raqamni topib qaytarsin.
// MASALAN: majorityElement([1,2,3,4,5,4,3,4]) return 4


// function mostRepeatedNumber(arr: number[]): number | null {
//   const numberCounts: { [key: number]: number } = {};
//   let maxCount = 0;
//   let mostRepeated: number | null = null;

//   for (let num of arr) {
//       numberCounts[num] = (numberCounts[num] || 0) + 1;
//       if (numberCounts[num] > maxCount) {
//           maxCount = numberCounts[num];
//           mostRepeated = num;
//       }
//   }

//   return mostRepeated;
// }


// const numbers = [1, 3, 2, 3, 4, 5, 3, 2, 2, 2];
// console.log(mostRepeatedNumber(numbers)); // Output: 2




/* Project Standards:
  - Logging standards
  - Naming standars
     function, method, variable => CAMEL case
     class => PASCAL
     folder => KEBAB 
     css =>  SNAKE

     - Error handling 
     */

     // Traditional API, REST API, GRAPHQL API

// H2-TASK: 

// Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
// MASALAN: getDigits("m14i1t") return qiladi "141"



// function extractDigits(input: string): string {
//     const digits = input.match(/\d+/g);
  
//     return digits ? digits.join('') : '';
//   }
  
  
//   const exampleString = "Hello MIT12, this is MIT14!";
//   const result = extractDigits(exampleString);
//   console.log(result); // 
  

// H-TASK: 

// shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
// MASALAN: getPositive([1, -4, 2]) return qiladi "12"


// function getPositive(arr: number[]): string {
    
//     const positiveValues: number[] = arr.filter(value => value > 0);
  
    
//     return positiveValues.map(value => value.toString()).join("");
//   }
  
  
//   const numbers: number[] = [-1, 2, -3, 4, 0, 5];
//   const result: string = getPositive(numbers);
//   console.log(result); // Output: "245"

// Validation 
// Frontend Validation
// Backend Validation
// Database validation
  