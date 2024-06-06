// H-TASK: 

// shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
// MASALAN: getPositive([1, -4, 2]) return qiladi "12"


function filterPositiveIntegers(arr: number[]): string {
    
    const positiveValues: number[] = arr.filter(value => value > 0);
  
    
    return positiveValues.map(value => value.toString()).join("");
  }
  
  
  const numbers: number[] = [-1, 2, -3, 4, 0, 5];
  const result: string = filterPositiveIntegers(numbers);
  console.log(result); // Output: "2,4,5"
  