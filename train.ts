/*
  ZN-TASK:
    Shunday function yozing, uni array va number parametri bolsin. Ikkinchi 
    parametrda berilgan raqamli indexgacha arrayni orqasiga ogirib qaytarsin.
    MASALAN: rotateArray([1, 2, 3, 4, 5, 6], 3) return [5, 6, 1, 2, 3, 4]
*/
function rotateArray<T>(arr: T[], k: number): T[] {
  const length = arr.length;
  if (length === 0) return arr; // If the array is empty, return it as is

  // Ensure k is within the bounds of the array length
  const effectiveK = k % length;
  if (effectiveK === 0) return arr; // No need to rotate if k is 0 or a multiple of array length

  // Split the array and rotate
  const part1 = arr.slice(0, length - effectiveK);
  const part2 = arr.slice(length - effectiveK);
  
  return [...part2, ...part1];
}

// Example usage:
const rotatedArray = rotateArray([1, 2, 3, 4, 5, 6], 3);
console.log(rotatedArray); // Output: [4, 5, 6, 1, 2, 3]
