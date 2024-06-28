#! /usr/bin/env node
import inquirer from "inquirer";
const randomnumber = Math.floor(10000 + Math.random() * 90000);
let myBalance = 0;
let answer = await inquirer.prompt([
    {
        name: "students",
        type: "input",
        message: "Enter student name:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non-empty value.";
        },
    },
    {
        name: "courses",
        type: "list",
        message: "Select the course to enroll",
        choices: ["MS.Office", "HTML", "Javascript", "Typescript", "Python"]
    }
]);
const tutionfee = {
    "MS.Office": 2000,
    "HTML": 2500,
    "Javascript": 5000,
    "Typescript": 6000,
    "Python": 10000
};
console.log(`\nTuition Fees: ${tutionfee[answer.courses]}/-\n`);
console.log(`Balance: ${myBalance}\n`);
let paymentType = await inquirer.prompt([
    {
        name: "payment",
        message: "Select payment method",
        type: "list",
        choices: ["Bank Transfer", "Easypaisa", "Jazzcash"]
    },
    {
        name: "amount",
        message: "Transfer money:",
        type: "input",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non-empty value.";
        },
    }
]);
console.log(`\nYou select payment method ${paymentType.payment}`);
const tuitionfees = tutionfee[answer.courses];
const paymentAmount = parseFloat(paymentType.amount);
if (tuitionfees === paymentAmount) {
    console.log(`Congratulation, you have successfully enrolled in ${answer.courses}.\n`);
    let ans = await inquirer.prompt([
        {
            name: "select",
            message: "What would you like to do next?",
            type: "list",
            choices: ["View status", "Exit"]
        }
    ]);
    if (ans.select === "View status") {
        console.log("\n***Status***\n");
        console.log(`Student Name: ${answer.students}`);
        console.log(`Student ID: ${randomnumber}`);
        console.log(`Course: ${answer.courses}`);
        console.log(`Tuitin Fees Piad: ${paymentAmount}`);
        console.log(`Balance: ${myBalance += paymentAmount}`);
    }
    else {
        console.log("\nExting Student Management System\n");
    }
}
else {
    console.log("Invalid amount for the course\n");
}
