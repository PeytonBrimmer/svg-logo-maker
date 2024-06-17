const Triangle =  require ('../Triangle.js');

describe('triangle', () => {
    it('present triangle', () => {
        const triangle = new Triangle( 'blue','red', 'rrr');
        expect(triangle.render()).toEqual(`
        <svg version="1.1" 
        width = "300" height = "300"
        xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,50 100,150 200,150" fill="red"/>
        <text x="150" y="150" font-size="70" text-anchor="middle" fill="blue">rrr</text>
        </svg>`);
    });
});