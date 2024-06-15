function mostRepeatedNumber(arr: number[]): number | null {
  const numberCounts: { [key: number]: number } = {};
  let maxCount = 0;
  let mostRepeated: number | null = null;

  for (let num of arr) {
      numberCounts[num] = (numberCounts[num] || 0) + 1;
      if (numberCounts[num] > maxCount) {
          maxCount = numberCounts[num];
          mostRepeated = num;
      }
  }

  return mostRepeated;
}


const numbers = [1, 3, 2, 3, 4, 5, 3, 2, 2, 2];
console.log(mostRepeatedNumber(numbers)); // Output: 2




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
  