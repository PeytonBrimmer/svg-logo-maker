const inquirer = require('inquirer');
const fs = require('fs');
const name = "./examples/logo.svg";
const shape = require('./library/set.js');
const criteria = require('./library/criteria.js');

function createLogo(response) {
    const svg = shape(response);
    fs.writeFile(name, svg, () => console.log('Logo Generated')):
    }

    function initialize() {
        inquirer
        .prompt(criteria)
        .then((response) => {
            createLogo(response);
        })
        .catch((error) => {
            console.log(error);
        }); 
    }

    initialize();