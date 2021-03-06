const fs = require ("fs");
const axios = require("axios");
const inquirer = require("inquirer");

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
            "ISC",
            "MIT"
        ]
    },
    {
        type: "input",
        message: "Please provide a description of your project.",
        name: "description"
    },
    {
        type: "input",
        message: "What is the method of installation?",
        name: "installation"
    },
    {
        type: "input",
        message: "Usage:",
        name: "usage"
    },
    {
        type: "input",
        message: "What are the languages being used?",
        name: "contributing"
    },
    {
        type: "input",
        message: "Tests:",
        name: "tests"
    },
    {
        type:"input",
        message: "Enter your GitHub username:",
        name: "username"
    },
    {
        type:"input",
        message: "What is your email?",
        name: "email"
    }
];

let avatar = ""

function init() {
    inquirer.prompt(questions)
    .then( response => {

        const queryUrl = `https://api.github.com/users/${response.username}`;
        // console.log(queryUrl);
        axios.get(queryUrl)
        .then(function(res){
            avatar = res.data.avatar_url;

            // console.log(avatar);
            
            const info = generateReadMe(response, avatar)
                fs.writeFileSync("README.md",info);

            console.log("A ReadMe file has been written.")
        });

        
    });
    
}


function generateReadMe(data, avatar) {
    
    return `
  
  [![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})
  # ${data.title}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  
  How to install: ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## License
  
  A ${data.license} license is used.
  
  ## Contributing
  
  Languages Used: ${data.contributing}
  
  ## Tests
  
  ${data.tests}
  
  ## Questions
  
  Please contact [${data.username}](https://github.com/${data.username}) at ${data.email} for questions. 

  ![github avatar](${avatar})
  
  `
  }

init();

    // contributing: languages used, frameworks used, any knowledge necessary for contribution by another user
    // tests: npm test