/*
  ZQ-TASK:
    Shunday function yozing, u parametridagi array ichida 2 marta 
    qaytarilgan sonlarni alohida araryda qaytarsin.
    MASALAN: findDuplicates([1,2,3,4,5,4,3,4]) return [3, 4]
*/

function findDuplicates(array1: number[]): number[] {
    const counts: { [key: number]: number } = {}; // Object to keep track of number frequencies
    const result: number[] = [];

    // Step 1: Count each number's occurrences
    array1.forEach(num => {
        counts[num] = (counts[num] || 0) + 1;
    });

    // Step 2: Find numbers that appear exactly twice
    for (const num in counts) {
        if (counts[num] === 2) {
            result.push(Number(num));
        }
    }

    return result;
}
