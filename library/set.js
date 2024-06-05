const triangle = require('./triangle.js');
const circle = require('./circle.js');
const square = require('./square.js');

function setShape(response) {
    if (response.shape === "triangle") {
        let userShape = new triangle(response.shapeColor, response.textColor, response.text);
        return userShape.render();
    }
    if(response.shape === "circle") {
        let userShape = new circle(response.shapeColor, response.textColor, response.text);
        return userShape.render();
    }
    if(response.shape === "square") {
        let userShape = new square(response.shapeColor, response.textColor, response.text);
        return userShape.render();
    }
    else(return.response("Invalid shape"));
}

module.exports = setShape;