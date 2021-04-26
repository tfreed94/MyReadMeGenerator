// Variables importing File System Module and  Inquirer Package
const fs = require("fs")
const inquirer = require("inquirer")

// Creating the markdown for the README.md file based off user input
const generatedREADME = userInput => {
    return ` # ${userInput.Title}


![license](https://img.shields.io/badge/License-${userInput.License}-green?.svg)

# Table of Contents 
1. [Project Description](#description)
2. [Installation Process](#installation)
3. [Usage](#usage)
4. [Contributors](#contribution)
5. [License Coverage](#license)
6. [Questions](#questions)
    
## Description: 
${userInput.Description}
## Installation: 
${userInput.Installation}
## Usage: 
${userInput.Usage}
## License: 
${userInput.License}
## Contribution: 
${userInput.Contribution}
## Testing: 
${userInput.Test}

## Questions: 
Any questions, comments, or concerns, please feel free to contact me at:
* Github: ${userInput.Github} (https://github.com/${userInput.Github})
* Email: ${userInput.Email}`;
}
// Array of User Questions
// Using Inquirer to prompt user with questions
inquirer.prompt([
    {
        type: "input",
        name: "Title",
        message: "Project Title:"
    },

    {
        type: "input",
        name: "Description",
        message: "Give a brief description of your project:"
    },

    {
        type: "input",
        name: "Installation",
        message: "Describe your installation process, if there is any:"
    },

    {
        type: "input",
        name: "Usage",
        message: "How do you invoke your application?"
    },

    {
        type: "input",
        name: "Contribution",
        message: "Explain the contribution guidelines for this application:"
    },

    {
        type: "input",
        name: "Test",
        message: "How did you go about testing your project to make sure it works correctly?"
    },

    {
        type: "checkbox",
        name: "License",
        message: "Which license is your project covered under?",
        choices: [
            "[GNU]",
            "[ISC]",
            "[MIT]"

        ]
    },

    {
        type: "input",
        name: "Github",
        message: "Add your GitHub username:"
    },

    {
        type: "input",
        name: "Email",
        message: "Add the E-mail you prefer to be contacted with:"
    },
])
    // After user answers questions, a README.md file will be generated with the users answers 
    .then((userInput) => {
        const createREADME = generatedREADME(userInput);
        // Let user know if there is an error or if the README.md was successfully created
        fs.writeFile("README.md", createREADME, (err) => err ? console.log(err) : console.log("README has be successfully created"));
    });

