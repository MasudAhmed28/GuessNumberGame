let guess = document.getElementById("guess");
let input = document.getElementById("num");
let wrong = document.querySelector(".wrong");
let count = document.querySelector(".count");
let again = document.getElementById("again");
let hint = document.querySelector(".hint");
let ltr = document.querySelector(".ltr");

console.log(input.value);
console.log(input.innerHTML);
let result = Math.floor(Math.random() * 100 + 1);
console.log(result);
let ct = 0;
count.innerHTML = ct;
guess.addEventListener("click", () => {
  if (input.value < 1 || input.value > 100) {
    ct += 1;
    wrong.innerHTML = "Enter a number between 0-100";
  } else {
    if (input.value > result) {
      ct += 1;
      wrong.innerHTML = "The number is smaller than you guessed";
    } else if (input.value < result) {
      ct += 1;
      wrong.innerHTML = "The number is greater than you guessed";
    } else {
      ct += 1;
      count.innerHTML = ct;
      wrong.innerHTML =
        "Congratulation you have guess it correctly in " + ct + " attempt";
      guess.style.display = "none";
      again.style.display = "block";
    }
  }
  count.innerHTML = ct;
});
again.addEventListener("click", () => {
  guess.style.display = "block";
  again.style.display = "none";
  window.location.reload();
});

let units = [
  "Zero",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
];
let teens = [
  "Ten",
  "Eleven",
  "Twelve",
  "Thirteen",
  "Fourteen",
  "Fifteen",
  "Sixteen",
  "Seventeen",
  "Eighteen",
  "Nineteen",
];
let tens = [
  "Twenty",
  "Thirty",
  "Forty",
  "Fifty",
  "Sixty",
  "Seventy",
  "Eighty",
  "Ninety",
  "hundred",
];

function hintProvide(result) {
  if (result < 10) {
    return units[result];
  } else if (result < 20) {
    return teens[result % 10];
  } else if (result < 100) {
    if (result % 10 === 0) {
      return tens[Math.floor(result / 10 - 2)];
    } else return tens[Math.floor(result / 10 - 2)] + units[result % 10];
  }
}
console.log("hint+" + hintProvide(result).charAt(0));

hint.addEventListener("click", () => {
  ltr.innerHTML =
    "The number start with Letter : " + hintProvide(result).charAt(0);
});
