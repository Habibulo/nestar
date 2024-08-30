/*
  ZP-TASK:
    shunday function yozing, u 2 ta array parametr qabul qilsin. 
    Siz bu ikki arrayning qiymatlari o'xshash bo'lishini(ya'ni, ularning barcha elementlari bir xil bo'lishini) tekshirishingiz kerak.
    MASALAN: 
    areArraysEqual([1, 2, 3], [3, 1, 2]) // true
    areArraysEqual([1, 2, 3], [3, 1, 2, 1]) // true
    areArraysEqual([1, 2, 3], [4, 1, 2]) // false

*/

function areArraysEqual(arr1: number[], arr2: number[]): boolean {
	const countElements = (arr: number[]): Map<number, number> => {
		const countMap = new Map<number, number>();
		for (const num of arr) {
			countMap.set(num, (countMap.get(num) || 0) + 1);
		}
		return countMap;
	};
	const map1 = countElements(arr1);
	const map2 = countElements(arr2);
	if (map1.size !== map2.size) {
		return false;
	}
	for (const [key, value] of map1) {
		if (map2.get(key) !== value) {
			return false;
		}
	}
	return true;
}

// Examples:
console.log(areArraysEqual([1, 2, 3], [3, 1, 2]));
console.log(areArraysEqual([1, 2, 3], [3, 1, 2, 1]));
console.log(areArraysEqual([1, 2, 3], [4, 1, 2]));
