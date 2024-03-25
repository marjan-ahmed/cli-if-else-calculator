#! usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.green("Welcome to my calculator (By Marjan Ahmed)"));
console.log("\n");

const answers = await inquirer.prompt([
    {
        name: "firNum",
        type: "number",
        message: "Enter your first number: "
    },
    {
        type: "list",
        name: "operator",
        choices: ["+","-","*","/"],
        message: "Enter your first number: "
    },
    {
        name: "secNum",
        type: "number",
        message: "Enter your second number: "
    },
]);

let result;
if(answers.operator === "+")
{
    result = answers.firNum + answers.secNum;
}

else if(answers.operator === "-")
{
    result = answers.firNum - answers.secNum;
}

else if(answers.operator === "/")
{
    result = answers.firNum / answers.secNum
}

else if(answers.operator === "*")
{
    result = answers.firNum * answers.secNum;
}

else{
    console.log(chalk.red("Maybe Invalid Operator"));
}
console.log(chalk.yellow(`${answers.firNum} ${answers.operator} ${answers.secNum} = ${result}`));