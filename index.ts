#! /usr/bin/env node
import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";
const res = await inquirer.prompt({
    type: "number",
    name: "userInput",
    message: "Please enter the amount of second",
});

let input= res.userInput
function startTime(val: number){
    const intTime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTime = new Date(intTime);
    setInterval(() => {
     const currentTime = new Date();
     const timeDifference = differenceInSeconds(intervalTime, currentTime);
     if (timeDifference <= 0) {
        console.log("Timer Has Expired")
        process.exit();
     }
     const min = Math.floor((timeDifference % (3600 * 24))/3600);
     const sec = Math.floor(timeDifference % 60);
     console.log(`${min.toString().padStart(2,"0")}:${sec.toString().padStart(2,"0")}`);
    }, 1000);
}
startTime(input);