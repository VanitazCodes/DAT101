"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--------- Part 1 ----------------------------------------------------------------------------------------------");

let AccountType = {
    NORMAL: "Brukskonto",
    SAVING: "Sparekonto",
    CREDIT: "Kreditkonto",
    PENSION: "Pensionskonto"
};

printOut(Object.values(AccountType).join(", "));
printOut(newLine);

printOut("--------- Part 2 ----------------------------------------------------------------------------------------------");
class TAccount {
    constructor(type) {
        this.type = type;
        this.balance = 0;
        this.withdrawCount = 0;
    }

    toString() {
        return `myAccount = ${this.type}`;
    }

    setType(newType) {
        if (this.type !== newType) {
            let oldType = this.type;
            this.type = newType;
            this.withdrawCount = 0;
            printOut(`Account is changed from ${oldType} to ${this.type}`);
        }
    }
}


let myAccount = new TAccount(AccountType.NORMAL);
printOut(myAccount.toString());
myAccount.setType(AccountType.SAVING);
printOut(myAccount.toString());
printOut(newLine);

printOut("--------- Part 3 ----------------------------------------------------------------------------------------------");
TAccount.prototype.getBalance = function() {
    return this.balance;
};

TAccount.prototype.deposit = function(amount) {
    this.balance += amount;
    printOut(`Deposit of ${amount.toFixed(2)}, new balance is ${this.balance.toFixed(2)}`);
};

TAccount.prototype.withdraw = function(amount) {
    this.balance -= amount;
    printOut(`Withdrawal of ${amount.toFixed(2)}, new balance is ${this.balance.toFixed(2)}`);
};

myAccount.deposit(100);
myAccount.withdraw(25);
printOut(`My account balance is ${myAccount.getBalance().toFixed(2)}`);
printOut(newLine);

printOut("--------- Part 4 ----------------------------------------------------------------------------------------------");
TAccount.prototype.withdraw = function(amount) {
    switch (this.type) {
        case AccountType.PENSION:
            printOut("You cannot withdraw from a Pensionskonto");
            break;

        case AccountType.SAVING:
            if (this.withdrawCount >= 3) {
                printOut("You can't withdraw from a Sparekonto more than three times!");
            } else {
                this.balance -= amount;
                this.withdrawCount++;
                printOut(`Withdrawal of ${amount.toFixed(2)}, new balance is ${this.balance.toFixed(2)}`);
            }
            break;

        default:
            this.balance -= amount;
            printOut(`Withdrawal of ${amount.toFixed(2)}, new balance is ${this.balance.toFixed(2)}`);
    }
};

myAccount.setType(AccountType.SAVING);
myAccount.deposit(100);

myAccount.withdraw(30);
myAccount.withdraw(30);
myAccount.withdraw(30);
myAccount.withdraw(10);

myAccount.setType(AccountType.PENSION);
myAccount.withdraw(10);

myAccount.setType(AccountType.NORMAL);
myAccount.withdraw(10);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");

const CurrencyTypes = {
    NOK: { value: 1.0000, name: "Norske kroner", denomination: "kr" },
    EUR: { value: 0.0985, name: "Europeiske euro", denomination: "€" },
    USD: { value: 0.0981, name: "United States dollar", denomination: "$" },
    GBP: { value: 0.0813, name: "Pound sterling", denomination: "£" },
    INR: { value: 8.1589, name: "Indiske rupee", denomination: "₹" },
    PKR: { value: 10.5516, name: "Pakistanske rupee", denomination: "₨" },
    PHP: { value: 5.3751, name: "Filippinske peso", denomination: "₱" },
    SEK: { value: 1.1568, name: "Svenske kroner", denomination: "kr" },
    DKK: { value: 0.7588, name: "Danske kroner", denomination: "kr" },
    CAD: { value: 0.1359, name: "Canadiske dollar", denomination: "$" },
    THB: { value: 3.3289, name: "Thai baht", denomination: "฿" }
};

TAccount.prototype.currencyType = CurrencyTypes.NOK;

TAccount.prototype.setCurrencyType = function(newCurrencyType) {
    if (this.currencyType === newCurrencyType) {
        return;
    }
    this.currencyType = newCurrencyType;
    printOut(`Currency changed to ${this.currencyType.name}`);
};

TAccount.prototype.deposit = function(amount) {
    this.balance += amount;
    printOut(`Deposit of ${amount.toFixed(2)}${this.currencyType.denomination}, new balance is ${this.balance.toFixed(2)}${this.currencyType.denomination}`);
};

TAccount.prototype.withdraw = function(amount) {
    if (this.balance < amount) {
        printOut("Insufficient balance for withdrawal.");
    } else {
        this.balance -= amount;
        printOut(`Withdrawal of ${amount.toFixed(2)}${this.currencyType.denomination}, new balance is ${this.balance.toFixed(2)}${this.currencyType.denomination}`);
    }
};

// Part 5 Test
myAccount.setCurrencyType(CurrencyTypes.NOK);
myAccount.deposit(150); 
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");

TAccount.prototype._convertCurrency = function(newCurrencyType) {
    const conversionRate = newCurrencyType.value / this.currencyType.value;
    this.balance *= conversionRate;
    this.currencyType = newCurrencyType;
};

TAccount.prototype.setCurrencyType = function(newCurrencyType) {
    if (this.currencyType !== newCurrencyType) {
        this._convertCurrency(newCurrencyType);
        printOut(`Currency changed to ${newCurrencyType.name}, new balance is ${this.balance.toFixed(2)}${this.currencyType.denomination}`);
    }
};

// Test Part 6
myAccount.setCurrencyType(CurrencyTypes.SEK);
printOut(`The account currency has changed from Norske kroner to ${CurrencyTypes.SEK.name}`);
printOut(`New balance is ${myAccount.balance.toFixed(2)}${myAccount.currencyType.denomination}`);
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");

TAccount.prototype.deposit = function(amount, currencyType = this.currencyType) {
    const convertedAmount = amount * (CurrencyTypes.NOK.value / currencyType.value);
    this.balance += convertedAmount;
    printOut(`Deposit of ${amount.toFixed(2)}${currencyType.denomination}, new balance is ${this.balance.toFixed(2)}${this.currencyType.denomination}`);
};

TAccount.prototype.withdraw = function(amount, currencyType = this.currencyType) {
    const convertedAmount = amount * (CurrencyTypes.NOK.value / currencyType.value);
    this.balance -= convertedAmount;
    printOut(`Withdrawal of ${amount.toFixed(2)}${currencyType.denomination}, new balance is ${this.balance.toFixed(2)}${this.currencyType.denomination}`);
};

// Test Part 7
myAccount.deposit(12, CurrencyTypes.USD);
myAccount.withdraw(10, CurrencyTypes.GBP);
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");

function modifyString(text, maxLen, char, addAtEnd) {
    if (text.length >= maxLen) {
        return text;
    }
    
    const padding = char.repeat(maxLen - text.length);
    return addAtEnd ? text + padding : padding + text;
}

// Test Part 8
printOut(modifyString("Task", 8, "*", true));
printOut(modifyString("Task", 8, "*", false));
printOut(newLine);
