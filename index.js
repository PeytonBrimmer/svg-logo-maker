const inquirer = require('inquirer');
const name = "./examples/logo.svg";
const fs = require('fs');
const shape = require('./library/set.js');
const criteria = require('./library/criteria.js');

function createLogo(response) {
    console.log(response);
    const svg = shape(response);
    fs.writeFile(name, svg, () => console.log('Logo Generated'));
<<<<<<< HEAD
}
=======
    }
>>>>>>> 240be7fe28583155fe9acb3b72e5516ee3515540

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
