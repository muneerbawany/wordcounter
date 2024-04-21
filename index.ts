#! /usr/bin/env_node
import inquirer from "inquirer";
const answers: {
  Sentence: string;
} = await  inquirer.prompt ([
  {
    name: "Sentence",
    type: "input",
    message: "Enter you sentence to count the word: "
  }
]);
const words = answers.Sentence.trim().split(" ");   
console.log(words);

console.log(`Your sentence word count is ${words.length}`);
