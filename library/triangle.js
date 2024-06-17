const shape = require('./shape.js');
class Triangle extends shape {
    constructor(shapeColor, textColor, text) {
        super(shapeColor, textColor, text);
    };
    render() {
        return `
        <svg version="1.1" 
        width = "300" height = "300"
        xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,50 100,150 200,150" fill="${this.shapeColor}"/>
        <text x="150" y="150" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    };
};
module.exports = Triangle;