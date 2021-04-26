// Variables importing File System Module and  Inquirer Package
const fs = require("fs")
const inquirer = require("inquirer")

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
            "[GNU](GNULICENSE.txt)",
            "[ISC](ISCLICENSE.txt)",
            "[MIT](LICENSE.txt)"

        ]
    },

    {
        type: "input",
        name: "Github",
        message: "Add your GitHub username:"
    },

    {
        type: "input",
        name: "E-mail",
        message: "Add the E-mail you prefer to be contacted with:"
    },
])
    // After user answers questions, a README.md file will be generated with the users answers in the correct sections of the README
    .then((userInput) => {
        const createREADME = generatedREADME(userInput);
        fs.writeFile("README.md", createREADME, (err) => err ? console.log(err) : console.log("README has be successfully created"));
    });

const generatedREADME = userInput => {
    return ` # ${userInput.title}

# License: 
![license](https://img.shields.io/badge/License-${userInput.license}-green?

# Table of Contents 
1. [Project Description](#description)
2. [Installation Process](#installation)
3. [Usage](#usage)
4. [Contributors](#contribution)
5. [License Coverage](#license)
6. [Questions](#questions)
    
## Description: 
${userInput.description}
## Installation: 
${userInput.installation}
## Usage: 
${userInput.usage}
## License: 
${userInput.license}
## Contribution: 
${userInput.contribution}
## Testing: 
${userInput.test}

## Questions: 
Any questions, comments, or concerns, please feel free to contact me at:
* Github: [${userInput.github}](https://github.com/${userInput.github})
* Email: ${userInput.email}`;
}

