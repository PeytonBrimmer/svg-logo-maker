const triangle =  require ('../triangle.js');

describe('triangle', () => {
    it('present triangle', () => {
        const triangle = new triangle('red', 'rrr' , 'blue');
        expect(triangle.render()).toEqual(`
        <svg version="1.1" 
        width = "300" height = "300"
        xmlns="http://www.w3.org/2000/svg">
        <polygon points="100,15 200, 200 0, 200" fill="rgb(255,0,0)"/>
        <text x="100" y="185" font-size="70" text-anchor="middle" fill="rgb(0,0,255)">rrr</text>
        </svg>`);
    });
});