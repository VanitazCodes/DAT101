"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let up = "";
let down = "";
for (let i = 1; i <= 10; i++) {
    up += i + ",";
}
for (let i = 10; i >= 1; i--) {
    down += i + ",";
}
printOut(up.slice(0, -1));
printOut(newLine);
printOut(down.slice(0, -1));
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let targetNumber = 45;
let guessedNumber;
while (guessedNumber !== targetNumber) {
    guessedNumber = Math.floor(Math.random() * 1000000) + 1;
}
printOut("Tallet er " + guessedNumber);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
targetNumber = 456783;
let rounds = 0;
const startTime = new Date().getTime();
do {
    guessedNumber = Math.floor(Math.random() * 1000000) + 1;
    rounds++;
} while (guessedNumber !== targetNumber);
const timeElapsed = new Date().getTime() - startTime;
printOut("Tallet er " + guessedNumber);
printOut("Datamaskinen brukte  " + rounds + " runder");
printOut("Og det tok " + timeElapsed + " millisek");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let primes = [];
for (let i = 2; i < 200; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        primes.push(i);
    }
}
printOut(primes.join(","));
printOut(newLine);
printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
for (let row = 1; row <= 7; row++) {
    let rowOutput = "";
    for (let col = 1; col <= 9; col++) {
        rowOutput += "K" + col + "R" + row + " ";
    }
    printOut(rowOutput.trim());
    printOut(newLine);
}



printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let score = Math.floor(Math.random() * 236) + 1;
let grade = "F";
if (score >= 98) grade = "E";
if (score >= 126) grade = "D";
if (score >= 154) grade = "C";
if (score >= 182) grade = "B";
if (score >= 210) grade = "A";
printOut("Kandidaten fikk " + score + " Poeng. Som er " + Math.floor((score / 236) * 100) + "%, og karakteren er " + grade);
printOut(newLine);
/* Bonus done! No array here :)*/

// Part 7: Dice Rolling Simulation
printOut("--- Part 7 ----------------------------------------------------------------------------------------------");

function roll() {
    return Math.floor(Math.random() * 6) + 1;
}

// 3 Pairs
let attempts1 = 0;
while (true) {
    let a = roll(), b = roll(), c = roll(), d = roll(), e = roll(), f = roll();
    attempts1++;
    let counts1 = [0, 0, 0, 0, 0, 0];
    counts1[a - 1]++; counts1[b - 1]++; counts1[c - 1]++; counts1[d - 1]++; counts1[e - 1]++; counts1[f - 1]++;
    if (counts1.filter(x => x === 2).length === 3) {
        printOut(a + "," + b + "," + c + "," + d + "," + e + "," + f + " 3 Par");
        printOut(" På " + attempts1 + " kast!");
        printOut(newLine);
        break;
    }
}

// Full Straight
let attempts2 = 0;
while (true) {
    let g = roll(), h = roll(), i = roll(), j = roll(), k = roll(), l = roll();
    attempts2++;
    let nums2 = [g, h, i, j, k, l].sort().join("");
    if (nums2 === "123456") {
        printOut(g + "," + h + "," + i + "," + j + "," + k + "," + l + " Full straight");
        printOut(" På " + attempts2 + " Kast!");
        printOut(newLine);
        break;
    }
}

// Tower
let attempts3 = 0;
while (true) {
    let m = roll(), n = roll(), o = roll(), p = roll(), q = roll();
    attempts3++;
    let counts2 = [0, 0, 0, 0, 0, 0];
    counts2[m - 1]++; counts2[n - 1]++; counts2[o - 1]++; counts2[p - 1]++; counts2[q - 1]++;
    if (counts2.includes(3) && counts2.includes(2)) {
        printOut(m + "," + n + "," + o + "," + p + "," + q + " Tårn");
        printOut(" På " + attempts3 + " kast!");
        printOut(newLine);
        break;
    }
}

// Yahtzee
let attempts4 = 0;
while (true) {
    let r = roll(), s = roll(), t = roll(), u = roll(), v = roll();
    attempts4++;
    if (r === s && s === t && t === u && u === v) {
        printOut(r + "," + s + "," + t + "," + u + "," + v + " Yatzi!");
        printOut(" På " + attempts4 + " kast!");
        printOut(newLine);
        break;
    }
}
