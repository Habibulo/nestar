/*
  ZT-TASK:
	Shunday function yozing, u parametridagi string ichida 1 martadan
	ortiq qaytarilmagan birinchi harf indeksini qaytarsin.
	MASALAN: firstUniqueCharIndex(“stamp”) return 0
*/

function firstUniqueCharIndex(input: string): number {
	for (let i = 0; i < input.length; i++) {
			// Check if the current character's first and last occurrence are the same
			if (input.indexOf(input[i]) === input.lastIndexOf(input[i])) {
					return i;  // Return the index of the first unique character
			}
	}
	return -1;  // If no unique character exists, return -1
}
console.log(firstUniqueCharIndex("stamp"));  // Output: 0 (The 's' is unique)
console.log(firstUniqueCharIndex("swiss"));  // Output: 1 (The 'w' is unique)
