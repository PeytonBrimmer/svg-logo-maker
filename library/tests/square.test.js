const square =  require ('../square.js');

describe('square', () => {
    it('present square', () => {
        const square = new square('red', 'ABC' , 'blue');
        expect(square.render()).toEqual(`
        <svg version="1.1" 
        width = "300" height = "200"
        xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="rgb(255,0,0)"/>
        <text x="100" y="125" font-size="70" text-anchor="middle" fill="rgb(0,0,255)">ABC</text>
        </svg>`);
    });
});