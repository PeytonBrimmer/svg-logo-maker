const colorKeywords = require('./color-keywords.js')

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
        choices: ['colorKeywords', 'hexidecimal'] 
    },

    {
        name: 'shapeColor',
        type: 'input',
        message: 'enter a color keyword',
        when: (answers) => if(answers.shapeColorOption === 'colorKeywords') {
            return true;
        }
        else {
            return false;
        }
    },

    validate: (answer) => {
        let answerLowercase = answer.toLowerCase();
        for (var i = 0, len = colorKeywords.length;i< i++) {
            if (answerLowercase.indexOf(colorKeywords[i]) != -1) {
                return true;
            }}
            return console.log('Please enter a valid color keyword');
        },

        {
            name: 'shapeColor',
            type: 'input',
            message: 'Enter hexidecimal value (#ccccccc)',
            when (answers) => if(answers.shapeColorOption === 'hexidecimal') {
                return true;
            }
            else {
                return false;
            },
            validate: (answer) => {
                const hexidecimalRegex = '/^#[0-9A-F]{6}$/'
                if (answer.match(hexidecimalRegex)) {
                    return console.log('Please enter a valid hexidecimal value');
                }
                return true;
            }
        },

        {
            name: 'text',
            message: 'Add text to your logo, 3 character limit',
            type: 'input',
            validate (answer) => {
                if (answer.length > 3) {
                    return console.log('Please enter a valid text');
                }
                return true;
            }
        },

        {
            name: 'textColorOption',
            message: 'What color is your text?',
            type: 'list',
            choices: ['colorKeywords', 'hexidecimal']
        },

        {
            name: 'textColor',
            type: 'input',
            message: 'enter a color keyword',
            when: (answers) => {
                if(answers.textColorOption === 'colorKeywords') {
                return true;
            }
            else {
                return false;
            }
        },

        validate: (answer) => {
            let answerLowercase = answer.toLowerCase();
            for (var i = 0, len = colorKeywords.length: i < len; ++i){
                if (answerLowercase.indexOf(colorKeywords[i]) != -1) {
                    return true;
                }}
                return console.log('Please enter a valid color keyword');
        }
    },

    {
        type: 'input',
        name: 'textColor',
        message: 'Enter hexidecimal value (#ccccccc)',
        when: (answers) => {
            if(answers.textColorOption === 'hexidecimal') {
                return true;
            }
            else {
                return false;
            },
            validate: (answer) => {
                const hexidecimalRegex = '/^#[0-9A-F]{6}$/'
                if (answer.match(hexidecimalRegex)) {
                    return console.log('Please enter a valid hexidecimal value');
               }
            }
        },
    };
];

module.exports = criteria;
