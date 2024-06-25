const Triangle = require('./Triangle.js');
const Circle = require('./Circle.js');
const Square = require('./Square.js');

function setShape(response) {
    if (response.shape === "Triangle") {
        let userShape = new Triangle(response.shapeColor, response.textColor, response.text);
        console.log(userShape);
        return userShape.render();
    }
    if(response.shape === "Circle") {
        let userShape = new Circle(response.shapeColor, response.textColor, response.text);
        return userShape.render();
    }
    if(response.shape === "Square") {
        let userShape = new Square(response.shapeColor, response.textColor, response.text);
        return userShape.render();
    }
    else{return console.error("invalid shape")};
}

module.exports = setShape;