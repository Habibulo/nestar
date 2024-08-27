/*
  ZO-TASK:
    Shunday function yozing, u parametrdagi string ichidagi qavslar miqdori balansda ekanligini 
    aniqlasin. Ya'ni ochish("(") va yopish(")") qavslar soni bir xil bolishi kerak.
    MASALAN: areParenthesesBalanced("string()ichida(qavslar)soni()balansda") return true
*/
function areParenthesesBalanced(input: string): boolean {
  let balance = 0;

  for (const char of input) {
      if (char === '(') {
          balance++;
      } else if (char === ')') {
          balance--;
      }

      // If balance goes negative, it means there's a closing parenthesis
      // without a matching opening parenthesis
      if (balance < 0) {
          return false;
      }
  }

  // If balance is 0, all opening parentheses have matching closing ones
  return balance === 0;
}

// Test cases
console.log(areParenthesesBalanced("string()ichida(qavslar)soni()balansda")); // true
console.log(areParenthesesBalanced("string()(ichida(qavslar)soni)(balansda"));// true
console.log(areParenthesesBalanced("string(ichida(qavslar)soni)balansda"));    // false
console.log(areParenthesesBalanced("string(ichida(qavslar soni balansda"));   // false
