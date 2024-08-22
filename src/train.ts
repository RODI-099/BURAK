// ZK-TASK:

// Shunday function yozing, u har soniyada bir marta consolega 1 dan 5 gacha bolgan raqamlarni chop etsin va 5 soniyadan keyin ishini toxtatsin.
// MASALAN: printNumbers()


function printNumbers(counter = 1) {
  console.log(counter);
  if (counter < 5) {
      setTimeout(() => printNumbers(counter + 1), 1000); 
  }
}

printNumbers();



// ZJ-TASK:

// Shunday function yozing, u berilgan arrayni ichidagi numberlarni qiymatini hisoblab qaytarsin.
// MASALAN: reduceNestedArray([1, [1, 2, [4]]]) return 8


// function reduceNestedArray(arr: any) {
//   let total = 0;
  
//   for (let item of arr) {
//       if (Array.isArray(item)) {
//           total += reduceNestedArray(item); 
//       } else {
//           total += item; 
//       }
//   }
  
//   return total;
// }
// const result = reduceNestedArray([5, [3, 10, [7]]]);
// console.log(result); // Output will be 25


// ZI-TASK:

// Shunday function yozing, u function ishga tushgandan 3 soniyadan keyin "Hello World" ni qaytarsin.
// MASALAN: delayHelloWorld("Hello World") return "Hello World"

// function delayHelloWorld(message: any, callback: any) {
//   setTimeout(() => {
//       callback(message);
//   }, 3000);
// }

// // Example usage:
// delayHelloWorld("Hello World", function(result: any) {
//   console.log(result);  
// });

// ZH-TASK:

// Shunday function yozing, u berilgan array parametrni ichidagi eng katta raqamgacha tushib qolgan raqamlarni bir arrayda qaytarsin. 
// MASALAN: findDisappearedNumbers([1, 3, 4, 7]) return [2, 5, 6]


// function findDisappearedNumbers(arr: any) {
//   const missingNumbers = [];
  
//   const maxNum = Math.max(...arr);
//   const isPresent = new Array(maxNum).fill(false);
//   arr.forEach((num: number) => {
//       isPresent[num - 1] = true;
//   });
  
//   for (let i = 1; i <= maxNum; i++) {
//       if (!isPresent[i - 1]) {
//           missingNumbers.push(i);
//       }
//   }
  
//   return missingNumbers;
// }

// // Example usage
// const result = findDisappearedNumbers([1, 3, 4, 7, 9, 15]);
// console.log(result);  // Output: [2, 5, 6]


// TASK ZG

// String sifatida berilgan string parametrni
// snake case'ga o'tkazib beradigan function yozing.

// MASALAN: convertToSnakeCase('name should be a string')
// return 'name_should_be_a_string'
// function convertToSnakeCase(inputString: any) {
  
//   return inputString.replace(/ /g, '_').toLowerCase();
// }

// // Example usage:
// const result = convertToSnakeCase('I am MIT student');
// console.log(result);  


// Shunday function yozing, uni string parametri bolsin. String ichidagi har bir sozni bosh harflarini katta harf qilib qaytarsin lekin 1 yoki 2 harfdan iborat sozlarni esa oz holicha qoldirsin.
// MASALAN: capitalizeWords('name should be a string') return 'Name Should be a String'


// function capitalizeWords(input: string): string {
//   return input
//     .split(' ')
//     .map(word => {
//       return word.length > 2 ? word[0].toUpperCase() + word.slice(1).toLowerCase() : word.toLowerCase();
//     })
//     .join(' ');
// }


// const result = capitalizeWords('you have to be software developer');
// console.log(result); 



// ZE-TASK:

// Shunday function yozing, uni  string parametri bolsin. String ichida takrorlangan harflarni olib tashlab qolganini qaytarsin
// MASALAN: removeDuplicate('stringg') return 'string'


// function removeDuplicate(str: any) {
//   let seen = new Set(); 
//   let result = []; 

//   for (let char of str) {
//       if (!seen.has(char)) {
//           seen.add(char);
//           result.push(char);
//       }
//   }

//   return result.join('');
// }

// // Example usage:
// console.log(removeDuplicate('stringg')); // Output: 'string'



// ZD-TASK:

// Shunday function yozing, uni number, array va number parametrlari bolsin va berilgan 1-parametr numberga teng indexni array ichidan topib 3-parametrdagi raqam bilan almashtirib yangilangan arrayni qaytarsin
// MASALAN: changeNumberInArray(1, [1,3,7,2], 2) return [1,2,7,2]
// function changeNumberInArray(target: any, arr: any, newValue: any) {
//   const index = arr.indexOf(target);
//   if (index !== -1) {
//       arr[index] = newValue;
//   } else {
//       console.log(`The target value ${target} is not in the array.`);
//   }
//   return arr;
// }

// // Another example usage:
// const result = changeNumberInArray(7, [1, 3, 7, 2, 8, 7], 9);
// console.log(result);  // Output: [1, 3, 9, 2, 8, 7]

// ZC-TASK:

// Shunday function yozing, uni number parametri bolsin va function parametrni selsiy miqdori sifatida qabul qilib uni farenhitga ozgartirib bersin
// MASALAN: celsiusToFahrenheit(0) return 32

// function celsiusToFahrenheit(celsius: any) {
//   const fahrenheit = celsius * 9/5 + 32;
//   return fahrenheit;
// }

// console.log(celsiusToFahrenheit(30)); 

// ZB-TASK:

// Shunday function yozing, uni 2 ta number parametri bolsin va berilgan sonlar orasidan random raqam return qilsin
// MASALAN: randomBetween(30, 50) return 45
// function randomBetween(min: any, max: any) {
  
//   min = Math.ceil(min);
//   max = Math.floor(max);

//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }


// const randomNum = randomBetween(30, 50);
// console.log(randomNum);

// Z-TASK:

// Shunday function yozing, uni sonlardan tashkil topgan array qabul qilsin. Function arraydagi juft sonlarni yigindisini qaytarsin
// MASALAN: sumEvens([1,2,3])s return 2


// let numStr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const sumEvens = (numStr:any) => {
//   let sum = 0;
//   for (let i = 0; i < numStr.length; i++) {
//     if (numStr[i] % 2 === 0) {
//     sum = sum + numStr[i];
//     }
//   }
//   return sum;
// }
 
// console.log(sumEvens(numStr));



// Y-TASK:

//  Shunday function yozing, uni 2 ta array parapetri bolsin. Function ikkala arrayda ham ishtirok etgan qiymatlarni bir arrayda qaytarsin
//  MASALAN: findIntersection([1,2,3], [3,2,0]) return [2,3]


// function intersection (a: any, b: any) {
//   const setA = new Set(a);
//   return b.filter((value: any) => setA.has(value));
// }

// console.log(intersection([1,2,3], [2,3,4,5]))

// function countOccurrences(obj: { model: string; steer: { model: string; size: number; }; }, key: string) {
//   let count = 0;

//   function recurse(currentObj: { [x: string]: any; model?: string; steer?: { model: string; size: number; }; }) {
//     for (let k in currentObj) {
//       if (k === key) {
//         count++;
//       }
//       if (typeof currentObj[k] === 'object' && currentObj[k] !== null) {
//         recurse(currentObj[k]);
//       }
//     }
//   }

//   recurse(obj);
//   return count;
// }

// // Example usage
// const exampleObject = {
//   model: 'Bugatti',
//   steer: {
//     model: 'HANKOOK',
//     size: 30
//   }
// };

// const result = countOccurrences(exampleObject, 'model');
// console.log(result); // Output: 2






// W-TASK:

// Shunday function yozing, uni array va number parametrlari bolsin. Function arrayni numberda berilgan uzunlikda kesib bolaklarga ajratilgan array holatida qaytarsin
// MASALAN: chunkArray([1,2,3,4,5,6,7,8,9,10], 3) return [[1,2,3], [4,5,6], [7,8,9], [10]]


// function chunkArray(array: string | any[], size: number) {

//   const chunks = [];


//   for (let i = 0; i < array.length; i += size) {
  
//     const chunk = array.slice(i, i + size);
//     chunks.push(chunk);
//   }

//   return chunks;
// }


// const result = chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
// console.log(result);
// U-TASK:

// Shunday function yozing, uni number parametri bolsin va 0 dan berilgan parametrgacha bolgan oraliqdagi faqat toq sonlar nechtaligini return qilsin
// MASALAN: sumOdds(9) return 4; sumOdds(11) return 5;


// function sumOdds(number: number) {
//   let count = 0;
//   for (let i = 2; i <= number; i++) {
//       if (i % 2 !== 0) {
//           count++;
//       }
//   }
//   return count;
// }

// // Examples
// console.log(sumOdds(17));  // Output: 8
// console.log(sumOdds(25)); // Output: 12

// T-TASK:

// Shunday function yozing, u sonlardan tashkil topgan 2 ta array qabul qilsin va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin
// MASALAN: mergeSortedArrays([0,3,4,31], [4,6,30]); return [0,3,4,4,6,30,31]


// const array1: number[] = [1, 4, 5, 6];
// const array2: number[] = [2, 3, 4, 5, 6, 7, 9, 10];

// function mergeAndSortArrays(array1: number[], array2: number[]): number[] {
  
//   let combinedArray: number[] = array1.concat(array2);

 
//   combinedArray.sort((a, b) => a - b);

//   return combinedArray;
// }

// const result = mergeAndSortArrays(array1, array2);
// console.log(result);  // Output: [1, 2, 3, 4, 4, 5, 5, 6, 6, 7, 9, 10]


// S-TASK:

// Shunday function yozing, u numberlardan tashkil topgan array qabul qilsin va osha numberlar orasidagi tushib qolgan sonni topib uni return qilsin
// MASALAN: missingNumber([3, 0, 1]) return 2


// function missing(arr: string | any[]) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== i + 1) {
//       return i + 1;
//     }
//   }
// }
// let a = missing([1, 2, 3, 4, 5, 7, 8, 9, 10])
// console.log(a)


// R-TASK:

// Shunday function yozing, u string parametrga ega bolsin. String "1+2" holatda pass qilinganda string ichidagi sonlar yigindisini number holatda qaytarsin.
// MASALAN: calculate("1+3") return 4;

// function calculate(expression: string) {
  
//   let numbers = expression.split("+");

//   let total = numbers.reduce((sum, number) => sum + Number(number), 0);
  
//   return total;
// }

// // Misol uchun:
// console.log(calculate("1+3"));  
// console.log(calculate("10+80"));  


// Q-TASK:

// Shunday function yozing, u 2 ta parametrgga ega bolib birinchisi object, ikkinchisi string. Agar string parametr objectni propertysi bolsa true bolmasa false qaytarsin.
// MASALAN: hasProperty({name: "BMW", model: "M3"}, "model") return true; hasProperty({name: "BMW", model: "M3"}, "year") return false

// function hasProperty(obj: object, str: string): boolean {
//   return obj.hasOwnProperty(str);
// }


// console.log(hasProperty({name: "KIA", model: "CARNIVAL"}, "model")); // Returns true
// console.log(hasProperty({name: "TESLA", model: "MODEL Y"}, "year")); // Returns false


// P-TASK:

// Shunday function yozing, u object qabul qilsin va arrayni object arrayga otkazib arrayni qaytarsin qaytarsin.
// MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]

// function objectToArray(obj: { [s: string]: unknown; } | ArrayLike<unknown>) {
//     return Object.entries(obj);
// }


// const obj = { a: 10, b: 20, z: 40, y: 30 };
// const result = objectToArray(obj);
// console.log(result); // [['a', 10], ['b', 20]]




// O-TASK:

// Shunday function yozing, u har xil valuelardan iborat array qabul qilsin va array ichidagi sonlar yigindisini hisoblab chiqqan javobni qaytarsin.
// MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]) return 45


// function sumOfNumbers(array: (string | number | null)[]) {
//     let total = 0;
//     for (let value of array) {
//         if (typeof value === 'number') {  // Check if the value is a number
//             total += value;
//         }
//     }
//     return total;
// }
// const array = [1, 'a', 3.5, 'hello', 7, null, 2];
// const result = sumOfNumbers(array);
// console.log(`Example: The sum of the numbers in the array is: ${result}`);

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
  