/*
  ZK-TASK:
    Shunday function yozing, u har soniyada bir marta consolega 
    1 dan 5 gacha bolgan raqamlarni chop etsin va 
    5 soniyadan keyin ishini toxtatsin.
    MASALAN: printNumbers()*/
function printNumbers(): void {
    let number = 1;
    const intervalId = setInterval(() => {
        console.log(number);
        if (number === 5) {
            clearInterval(intervalId); // Intervalni to'xtatish
        } else {
            number++; // Sonni oshirish
        }
    }, 1000); // 1000 millisekund = 1 soniya
}

printNumbers();
