let name = ["Joni", "Tangir", "Sardor", "Daler", "Asil", "Aminjon"];

name.forEach((имя) => {
  if (имя.length % 2 === 0) {
    console.log(имя);
  }
});


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const even = [];
const odds = [];

numbers.forEach(number => {
    if (number % 2 === 0) {
        even.push(number)
        odds.push(number);
  }
});