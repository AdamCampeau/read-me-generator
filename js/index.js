var inquirer = require ('inquirer');
var fs = require ('fs');
var markdown = require ('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "Title",
        message: "Title of Project",

    },
    {
        type: "input",
        name:"Description",
        message:"Description of Project",
    },
    {
        type:"input",
        name:"GitHUb",
        message:"GitHub username"
    },
    {
        type: "input",
        name: "Installation",
        message:"Installation of Project",
    },
    {
        type:"input",
        name:"Usage",
        message:"Usage of Project",
    },
    {
        type:"input",
        name:"Credits",
        message:"Contributors of Project",
    },
    {
        type:"checkbox",
        name:"Licenses",
        message:"Licenses used in Project",
        choices: ["ISC", "NCSA", "lgpl_3.0", "gpl_3.0","MIT", "ZLIB", "Apache_2.0"],
    },
    {
        type:"input",
        name:"Testing",
        message:"How to test Project",
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("ReadMe.md", markdown(data), err => err ? console.log(err) : console.log('ReadMe Generated')
)};

writeToFile();

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();