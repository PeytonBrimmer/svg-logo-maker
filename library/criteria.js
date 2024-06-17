const colorKeywords = require('./colorKeywords.js');


const criteria = [
    {
        name: 'shape',
        message: 'What shape is your logo?',
        type: 'list',
        choices: ['Triangle', 'Circle', 'Square'],
    },
    {
        name: 'shapeColorOption',
        message: 'What color is your logo?',
        type: 'list',
        choices: ['colorKeywords', 'hexadecimal'],
    },
    {
        name: 'shapeColor',
        type: 'input',
        message: 'Enter a color keyword',
        when: (answers) => answers.shapeColorOption === 'colorKeywords',
        validate: (answer) => {
            let answerLowercase = answer.toLowerCase();
            if (colorKeywords.includes(answerLowercase)) {
                return true;
            }
            return 'Please enter a valid color keyword';
        },
    },
    {
        name: 'shapeColorHex',
        type: 'input',
        message: 'Enter hexadecimal value (#cccccc)',
        when: (answers) => answers.shapeColorOption === 'hexadecimal',
        validate: (answer) => {
            const hexadecimalRegex = /^#[0-9A-F]{6}$/i;
            if (hexadecimalRegex.test(answer)) {
                return true;
            }
            return 'Please enter a valid hexadecimal value';
        },
    },
    {
        name: 'text',
        message: 'Add text to your logo, 3 character limit',
        type: 'input',
        validate: (answer) => {
            if (answer.length > 3) {
                return 'Please enter text with a maximum of 3 characters';
            }
            return true;
        },
    },
    {
        name: 'textColorOption',
        message: 'What color is your text?',
        type: 'list',
        choices: ['colorKeywords', 'hexadecimal'],
    },
    {
        name: 'textColor',
        type: 'input',
        message: 'Enter a color keyword',
        when: (answers) => answers.textColorOption === 'colorKeywords',
        validate: (answer) => {
            let answerLowercase = answer.toLowerCase();
            if (colorKeywords.includes(answerLowercase)) {
                return true;
            }
            return 'Please enter a valid color keyword';
        },
    },
    {
        name: 'textColorHex',
        type: 'input',
        message: 'Enter hexadecimal value (#cccccc)',
        when: (answers) => answers.textColorOption === 'hexadecimal',
        validate: (answer) => {
            const hexadecimalRegex = /^#[0-9A-F]{6}$/i;
            if (hexadecimalRegex.test(answer)) {
                return true;
            }
            return 'Please enter a valid hexadecimal value';
        },
    },
];

module.exports = criteria;