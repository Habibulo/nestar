/*
  ZM-TASK:
    Shunday function yozing, u function parametrga berilgan 
    raqamlarni orqasiga ogirib qaytarsin.
    MASALAN: reverseInteger(123456789) return 987654321
*/
function reverseInteger(num: number): number {
  // Convert the number to a string
  const numStr = num.toString();

  // Reverse the string and convert it back to a number
  const reversedNum = parseInt(numStr.split('').reverse().join(''), 10);

  return reversedNum;
}

// Example usage:
const originalNumber = 123456789;
const reversedNumber = reverseInteger(originalNumber);
console.log(reversedNumber); // Output: 987654321

