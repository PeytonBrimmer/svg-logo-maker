const Circle = require('../Circle.js');

describe('Circle', () => {
    it('should return logo with user choice of shape color, tex, and text color', () => {
        const circle = new Circle('white','blue','EKO');
        expect(circle.render()).toEqual(`<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="150" r="100" fill="blue"/><text x="150" y="150" font-size="70" text-anchor="middle" fill="white">EKO</text></svg>`
        );
    });
});