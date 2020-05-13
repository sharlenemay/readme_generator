var inquirer = require("inquirer");
var fs = require ("fs");

const questions = [
    {
        type: "input",
        message: "What is your project titled?",
        name: "title"
    },
    {
        type: "list",
        message: "What is your license?",
        name: "license",
        choices: [
            "ISC"
        ]
    },
    {
        type: "input",
        message: "Please provide a description of your project.",
        name: "description",
    }
];

inquirer
  .prompt(
    questions
)
.then (function(data) {

    var filename = "README.md";

    fs.writeFile(filename,JSON.stringify(data, null, '\t'),function(err){
        if(err){
            return console.log(err);
        }

        console.log("Success!");
    });

});

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();

    // contributing: languages used, frameworks used, any knowledge necessary for contribution by another user
    // tests: npm test