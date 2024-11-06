"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function printTodaysDate() {
    const today = new Date();
    printOut(today.toLocaleDateString("no-NB", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
}
printTodaysDate();
printOut(newLine);


printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function getTodaysDateAndCountdown() {
    const today = new Date();
    const releaseDate = new Date("2025-05-14");
    const daysLeft = Math.ceil((releaseDate - today) / (1000 * 60 * 60 * 24));
    printOut(`Today's date: ${today.toLocaleDateString("no-NB", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}`);
    printOut(`Days left until 2XKO release: ${daysLeft}`);
}
getTodaysDateAndCountdown();
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function printCircleProperties(radius) {
    const diameter = 2 * radius;
    const circumference = 2 * Math.PI * radius;
    const area = Math.PI * radius * radius;
    printOut(`Diameter: ${diameter.toFixed(2)}, Circumference: ${circumference.toFixed(2)}, Area: ${area.toFixed(2)}`);
}
printCircleProperties(5);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function printRectangleProperties(rect) {
    const circumference = 2 * (rect.width + rect.height);
    const area = rect.width * rect.height;
    printOut(`Circumference: ${circumference}, Area: ${area}`);
}
printRectangleProperties({ width: 4, height: 7 });
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function convertTemperature(temp, type) {
 let celsius, fahrenheit, kelvin;
    switch (type.toLowerCase()) {
    case "celsius":
        celsius = temp;
        fahrenheit = (temp * 9/5) + 32;
        kelvin = temp + 273.15;
        break;
     case "fahrenheit":
       celsius = (temp - 32) * 5/9;
     fahrenheit = temp;
      kelvin = celsius + 273.15;
       break;
     case "kelvin":
     celsius = temp - 273.15;
    fahrenheit = (celsius * 9/5) + 32;
     kelvin = temp;
     break;

default:
printOut("Unknown temperature type");
return;
}
printOut(`Celsius: ${Math.round(celsius)}, Fahrenheit: ${Math.round(fahrenheit)}, Kelvin: ${Math.round(kelvin)}`);
}
convertTemperature(30, "Celsius");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function calculateNetPrice(gross, vatGroup) {
    let vatRate;
    switch (vatGroup.toLowerCase()) {
        case "normal": vatRate = 25; break;
        case "food": vatRate = 15; break;
        case "hotel": case "transport": case "cinema": vatRate = 10; break;
        default:
            printOut("Unknown VAT group!");
            return NaN;
    }
    const net = (100 * gross) / (vatRate + 100);
    printOut(`Net price (VAT group: ${vatGroup}): ${net.toFixed(2)}`);
}
calculateNetPrice(125, "normal"); // Example
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function calculatePhysics(distance, time, speed) {
    if (distance == null) return time * speed;
    if (time == null) return distance / speed;
    if (speed == null) return distance / time;
    return NaN;
}
printOut(`Speed: ${calculatePhysics(100, 2, null)}`);
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function resizeText(text, maxSize, char, insertAtEnd) {
    while (text.length < maxSize) {
        text = insertAtEnd ? text + char : char + text;
    }
    printOut(text);
    return text;
}


resizeText("Hello", 10, "*", true);
resizeText("Hello", 10, "*", false);
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function testMathExpressions() {
    for (let i = 1; i <= 200; i++) {
        const leftSide = Array.from({ length: i }, (_, idx) => idx + 1).reduce((a, b) => a + b);
        const rightSide = Array.from({ length: i }, (_, idx) => idx + i + 1).reduce((a, b) => a + b);
        if (leftSide !== rightSide) {
            printOut(`Mismatch at line ${i}`);
            return;
        }
    }
    printOut("Maths fun!");
}
testMathExpressions();
printOut(newLine);
/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
printOut(`Factorial of 5: ${factorial(5)}`);
printOut(newLine);