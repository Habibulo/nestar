/*
  2024-09-13
	MIT 14
	TASK ZU:
		Shunday function yozing, va bu function parametr sifatida
		raqamlardan iborat array'ni qabul qilsin. Function'ning vazifasi,
		berilgan parametr array tarkibida takrorlanmagan raqamlarni topib
		ularni yig'indisini qaytarsin.

		MASALAN: sumOfUnique([1,2,3,2]); return 4;

		Yuqoridagi misolda, argument sifatida pass qilinayotgan array
		tarkibida bir marotabadan ortiq takrorlanmagan raqamlar, bular '1', '3'.
		Va natija sifatida yig'indi 4'ga teng.
*/
function sumOfUnique(arr: number[]): number {
	const frequency: { [key: number]: number } = {};

	// Har bir raqamni hisoblaymiz
	arr.forEach(num => {
			frequency[num] = (frequency[num] || 0) + 1;
	});

	// Takrorlanmagan raqamlarni yig'indisini hisoblaymiz
	return arr.reduce((sum, num) => {
			if (frequency[num] === 1) {
					return sum + num;
			}
			return sum;
	}, 0);
}

// Misol
console.log(sumOfUnique([1, 2, 3, 2])); // return 4
