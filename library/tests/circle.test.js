const circle =  require ('../circle.js');

describe('circle', () => {
    it('present circle', () => {
        const circle = new circle('red', 'rrr' , 'blue');
        expect(circle.render()).toEqual(`
        <svg version="1.1" 
        width = "300" height = "200"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="100" fill="red" />
        <text x="150" y="125" font-size="70" text-anchor="middle" fill="rgb(0,0,255)">rrr</text>
        </svg>`);
    });
});