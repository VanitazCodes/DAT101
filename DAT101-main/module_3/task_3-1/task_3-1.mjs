"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Task 1, 2 and 3");
printOut("--- Part 1 -------------------------------------------");

let wakeUpTime = 6;

if (wakeUpTime === 7) {
  printOut("If I wake up at exactly 7 o'clock, I can take the bus to school.");
} else if (wakeUpTime === 8) {
  printOut("If I wake up at exactly 8 o'clock, I can take the train to school.");
} else {
  printOut("Otherwise, I have to take the car to school.");
}
printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let number = 2002;

if (number > 0) {
    printOut("Positive");
  } else if (number < 0) {
   printOut("Negative");
  } else {
   printOut("Zero");
  }
printOut(newLine);

printOut("--- Part 6 & 7 ----------------------------------------------------------------------------------------------");
let imageSize = Math.floor(Math.random() * 8) + 1; // rANDOM Number Generator

  printOut("Uploaded image size: " + imageSize + " MP");

if (imageSize >= 6) {
  printOut("Image is too large!");
} else if (imageSize >= 4) {
  printOut("Thank you!");
} else {
  printOut("The image is too tiny!");
}
printOut(newLine);

printOut("--- Part 8 & 9 ----------------------------------------------------------------------------------------------");
const months = [
  { name: "January", days: 31 },
  { name: "February", days: 28 },
  { name: "March", days: 31 },
  { name: "April", days: 30 },
  { name: "Mai", days: 31 },
  { name: "June", days: 30 },
  { name: "July", days: 31 },
  { name: "August", days: 31 },
  { name: "September", days: 30 },
  { name: "October", days: 31 },
  { name: "November", days: 30 },
  { name: "December", days: 31 },
]; //I corrected it to English as some months were not spelled quite right. :)

const randomMonth = months[Math.floor(Math.random() * months.length)];

if (randomMonth.name.includes("r")) {
  printOut("You must take vitamin D");
} else {
  printOut("You do not need to take vitamin D");
  printOut(newLine);
}

printOut(`The month of ${randomMonth.name} has ${randomMonth.days} days.`);
printOut(newLine);
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");

const currentMonthIndex = new Date().getMonth(); // 0 for January and then forward.
const currentMonth = months[currentMonthIndex];

if (currentMonth.name === "March" || currentMonth.name === "May") {
  printOut("Gallery is closed for refurbishment. Will open soon!");
} else if (currentMonth.name === "April") {
  printOut("Temporary premises are open next door! :)");
} else {
  printOut("Gallery is open! Welcome!");
}
printOut(newLine);
