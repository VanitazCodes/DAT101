"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/*Use JavaScript to calculate the following expression, ensuring the result is -34:
2 + 3 * 2 - 4 * 6
Display both the original expression and the modified expression (with parentheses) along with their
results on the HTML page*/

 const part1 = 2 + 3 * (2 - 4) * 6; //I get -34 on this one because of
 const part1wrong = 2 + 3 * 2 - 4 * 6;

printOut ("Correct Answer: " + part1)
printOut ("Answer with no parentheses: " + part1wrong)
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/*Convert 25 meters and 34 centimeters to inches. An inch is 25.4 millimeters (maximum 2 decimal places in
the answer)
*/

const p2Millimeters = 25.4;
const p2Centimeters = 34; //I end up not needing to use this
const p2Meters = 25; //I end up not needing to use this
const p2MillInMeters = 1000;

const p2answer = (25.34 * p2MillInMeters) / p2Millimeters;
printOut ("answer is: " + p2answer.toFixed(2));
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/*Convert 3 days, 12 hours, 14 minutes, and 45 seconds to minutes. (Not allowed to use date objects). The
task must be solved with primitives*/

const p3Days = 3;
const p3Hours = 12;
const p3Minutes = 14;
const p3Seconds = 45;

const p3TotalMinutes = (p3Days * 24 * 60) + (p3Hours * 60) + p3Minutes + (p3Seconds / 60);


printOut("3 days, 12 hours, 14 minutes and 45 seconds turned into minutes is: " + p3TotalMinutes.toFixed(2));
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/*Convert 6,322.52 minutes to days, hours, minutes, and seconds. (Not allowed to use date objects). The
task must be solved with primitives.*/

const p4TotalMinutes = 6322.52;

const p4Days = Math.floor(p4TotalMinutes / (24 * 60));
const p4Hours = Math.floor((p4TotalMinutes % (24 * 60)) / 60);
const p4Minutes = Math.floor(p4TotalMinutes % 60);
const p4Seconds = Math.round((p4TotalMinutes % 1) * 60);

printOut(`Total time: ${p4Days} days, ${p4Hours} hours, ${p4Minutes} minutes, and ${p4Seconds} seconds`); 
//using back ticks instead of double quotes lets me embed expressions inside string.

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/*Convert 54 dollars to Norwegian kroner, and print the price for both:
NOK → USD and USD → NOK.
Use 76 NOK = 8.6 USD as the exchange rate.
The answer must be in whole "Kroner" and whole "dollars"*/ 

const p5Dollars = 54;
const p5ExchangeRateNOKtoUSD = 76 / 8.6;
const p5ExchangeRateUSDtoNOK = 8.6 / 76;

const NOK = Math.round(p5Dollars * p5ExchangeRateNOKtoUSD);
const USD = Math.round(NOK * p5ExchangeRateUSDtoNOK);

printOut(`${p5Dollars} USD is equal to ${NOK} NOK`);
printOut(`${NOK} NOK is equal to ${USD} USD`);

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/*Create a variable that contains the following text:
"There is much between heaven and earth that we do not understand."
● Print the number of characters in the text.
● Print the character at position number 19.
● Print the characters starting at position number 35 and 8 characters forward*/ 

const text = "There is much between heaven and earth that we do not understand.";

// Print the number of characters in the text
printOut(`Number of characters in text: ${text.length}`);

// Print the character at position number 19.
printOut(`The character at position 19 is: ${text.charAt(19)}`);

// Print the characters starting at position number 35 and 8 characters forward
printOut(`Characters starting at position 35 then 8 characters forward: ${text.substring(35, 8)}`);

printOut(newLine);


printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/*Comparison, print the values for the following expressions (evaluate whether the statements are true):
● Is 5 greater than 3?
● Is 7 greater than or equal to 7?
● Is "a" greater than "b"?
● Is "1" less than "a"?
● Is "2500" less than "abcd"?
● "arne" is not equal to "thomas".
● (2 equals 5) is this statement true?
● ("abcd" is greater than "bcd") is this statement false?
*/ 
/* Comparison statements. */

const p7Comparisons = [
    5 > 3,
    7 >= 7,
    "a" > "b",
    "1" < "a",
    "2500" < "abcd",
    "Arne" !== "Thomas",
    (2 === 5),
    ("abcd" > "bcd") === false,
  ];
  
 p7Comparisons.forEach((result, index) => { //forEach will count my elements and give me repeated answer with same setup but different statements depending on if its true or false
    printOut(`Statement ${index + 1} is ${result}`);
  });
  
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/*Convert and print the following expressions:
● from text "254" to a number
● from text "57.23" to a number
● from text "25 kroner" to a number
*/ 

const p8TextNumbers = ["254", "57.23", "25 kroner"];

const p8ConvertedNumbers = p8TextNumbers.map((text) => {
  const p8Num = parseFloat(text);
  return isNaN(p8Num) ? "Not a number" : p8Num;
});

p8ConvertedNumbers.forEach((p8Num, index) => {
  printOut(`Converted text "${p8TextNumbers[index]}" to: ${p8Num}`);
});

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/*Create a variable "r" and randomly generate a number from 1 to 360 (1 >= r <= 360)*/


const r = Math.floor(Math.random() * 360) + 1;

printOut(`Random number generated: ${r}`);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/*Use modulus (%) to calculate how many weeks and days are in 131 days.*/ 


const totalDays = 131;
const weeks = Math.floor(totalDays / 7);
const p10Days = totalDays % 7;


printOut(`${totalDays} days is ${weeks} weeks and ${p10Days} days`);
printOut(newLine);