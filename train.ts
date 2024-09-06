/*
  ZR-TASK:
    Shunday function yozing, u parametridagi string ichidagi 
    raqam va sonlarni sonini sanasin.
    MASALAN: countNumberAndLetters(“string152%\¥”) 
    return {number:3, letter:6}
*/

function countNumberAndLetters(input: string): { number: number; letter: number, char: number } {
	let letterCount = 0;
	let numberCount = 0;
    let characterCount = 0;

	for (let char of input) {
		if (/[a-zA-Z]/.test(char)) {
			letterCount++;
		} else if (/\d/.test(char)) {
			numberCount++;
		} else {
            characterCount++ ;
        }
	}

	return {
		number: numberCount,
		letter: letterCount,
        char: characterCount
	};
}
const result = countNumberAndLetters('string152%¥');
console.log(result); // { number: 3, letter: 6 }
