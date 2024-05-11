#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let energy1 = 100;
let energy2 = 100;

let you = await inquirer.prompt([
    {
        name : 'name',
        type : 'input',
        message : "Enter your name here...!"
    }
])
let otherplayer = await inquirer.prompt([
    {
        name : 'name',
        type : 'list',
        message : 'You want to play with',
        choices : ['Saba' , 'Zoha' , 'Meerub']
    }
])
let myName = you.name;
let player2 = otherplayer.name;
myName = myName.toUpperCase();
player2 = player2.toUpperCase();

console.log(chalk.greenBright.bold.italic(`hello "${myName}" you now are playing with "${player2}" and your game starts now!`));

while(true){
let ask = await inquirer.prompt([
    {
        name : 'run',
        type : 'confirm',
        message : 'Do you want to run'
    }
])
   if(ask.run === true){
     let enr = Math.floor(Math.random()*2);
     if(enr === 1){
        energy1 = energy1+25;
        energy2 = energy2-25;
        console.log(chalk.bgGreenBright.italic.bold.yellowBright(`
                      ${myName} energy is ${energy1}`));
        console.log(chalk.bgRedBright.italic.bold.yellowBright(`
                      ${player2} energy is ${energy2}`));

     }else if(enr===0){
        energy1 = energy1-25;
        energy2 = energy2+25;
        console.log(chalk.bgRedBright.italic.bold.yellowBright(`
                      ${myName} energy is ${energy1}`)); 
        console.log(chalk.bgGreenBright.italic.bold.yellowBright(`
                      ${player2} energy is ${energy2}`));
     }
     if(energy1===0){
        console.log(chalk.redBright.bold.italic(`
                                     ${myName} loss 😭😭😭😭😭`));
        console.log(chalk.greenBright.bold.italic(`
                                     ${player2} winn! 🥳🥳🥳🥳🥳.`));
        break;
        
        
     }else if(energy2===0){
        console.log(chalk.redBright.bold.italic(`
                                     ${player2} loss 😭😭😭😭😭.`));
        console.log(chalk.greenBright.bold.italic(`
                                     ${myName} winn! 🥳🥳🥳🥳🥳.`));
        break;
        
     }     
     
    }else if (ask.run=== false){
        console.log(chalk.magentaBright.italic.bold(`
                              Thanks for playing`));
        
        break;
    }
}