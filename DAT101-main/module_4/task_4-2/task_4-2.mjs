"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const numbers = [];
for (let i = 1; i <= 20; i++) {
    numbers.push(i);
}

console.log("Numbers array:", numbers);

numbers.forEach((num) => printOut(num));
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
if (numbers.length > 0) {
    printOut("Joined numbers with ' - ': " + numbers.join(" - "));
} else {
    printOut("The numbers array is empty.");
}
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const sentence = "Hei på deg, hvordan har du det?";
const words = sentence.split(" ");
words.forEach((word, index) => {
    printOut(`Word ${index + 1} (Index ${index}): ${word}`);
});
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const girlNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];
function removeFromArray(arr, element) {
    const index = arr.indexOf(element);
    if (index !== -1) {
        arr.splice(index, 1);
        printOut(`${element} was removed.`);
    } else {
        printOut(`${element} was not found in the array sadly.`);
    }
}
removeFromArray(girlNames, "Nina");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
const allNames = [].concat(girlNames, ["Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah", "Elias", "Isak", "Henrik", "Aksel", "Kasper", "Mathias", "Jonas", "Tobias", "Liam", "Håkon", "Theodor", "Magnus"]);
printOut(allNames.join("<br>")); //Used CONCAT that I learned. This better "printOut(newLine);" better not count as a line
printOut(newLine);


printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
class TBook {
    #title; 
    #author;
    #isbn;

    constructor(title, author, isbn) {
        this.#title = title;
        this.#author = author;
        this.#isbn = isbn;
    }

    toString() {
        return `Title: ${this.#title}, Author: ${this.#author}, ISBN: ${this.#isbn}`;
    }
}

const books = [
    new TBook("The Catcher in the Rye", "J.D. Salinger", "0316769487"),
    new TBook("To Kill a Mockingbird", "Harper Lee", "0446310786"),
    new TBook("1984", "George Orwell", "0451524934"),
];

books.forEach((book) => printOut(book.toString())); //I am not making it as pretty as yours ;p
printOut(newLine);


printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const EWeekDays = {
    WeekDay1: { value: 0x01, name: "Mandag" },
    WeekDay2: { value: 0x02, name: "Tirsdag" },
    WeekDay3: { value: 0x04, name: "Onsdag" },
    WeekDay4: { value: 0x08, name: "Torsdag" },
    WeekDay5: { value: 0x10, name: "Fredag" },
    WorkDays: { value: 0x01 + 0x02 + 0x04 + 0x08 + 0x10, name: "Arbeidsdager" },
    Weekends: { value: 0x20 + 0x40, name: "Helg" },
};

const weekDayKeys = Object.keys(EWeekDays);

weekDayKeys.forEach((key) => {
    const { value, name } = EWeekDays[key];
    printOut(`${key}: Value = ${value}, Name = ${name}`);
});
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const randomNumbers = Array.from({ length: 35 }, () => Math.floor(Math.random() * 20) + 1);
randomNumbers.sort((a, b) => a - b);
printOut(randomNumbers.join(", "));
randomNumbers.sort((a, b) => b - a);
printOut(randomNumbers.join(", "));
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const frequency = {};
randomNumbers.forEach((num) => {
    frequency[num] = (frequency[num] || 0) + 1;
});
Object.entries(frequency)
    .sort((a, b) => b[1] - a[1] || a[0] - b[0])
    .forEach(([num, freq]) => {
        printOut(`Number: ${num}, Frequency: ${freq}`);
    });
printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const grid = [];
for (let row = 0; row < 5; row++) {
    const currentRow = [];
    for (let col = 0; col < 9; col++) {
        currentRow.push(`Row ${row}, Col ${col}`);
    }
    grid.push(currentRow);
}
grid.forEach((row) => printOut(row.join(" | ")));
printOut(newLine);
