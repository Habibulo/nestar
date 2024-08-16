/* 
  ZJ-TASK:
    Shunday function yozing, u berilgan arrayni ichidagi 
    numberlarni qiymatini hisoblab qaytarsin.
    MASALAN: reduceNestedArray([1, [1, 2, [4]]]) return 8
*/

function reduceNestedArray(arr: any[]): number {
    return arr.reduce((acc, val) => {
        if (Array.isArray(val)) {
            return acc + reduceNestedArray(val);
        } else if (typeof val === 'number') {
            return acc + val;
        } else {
            return acc;
        }
    }, 0);
}

// Example usage:
const result = reduceNestedArray([1, [1, 2, [4]]]);
console.log(result); // Output: 8
