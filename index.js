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
        message: "List the names of all people who contributed to this project:"
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
