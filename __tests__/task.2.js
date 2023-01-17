const rewire = require("rewire");

describe('2. Compare BMIs', () => {
    it("`whoIsBiggest` fuction exists", () => {
        const whoIsBiggest = rewire('../solution.js').__get__("whoIsBiggest");
        expect(whoIsBiggest).toBeDefined();
    })
    it("function accepts 4 arguments", () => {
        const whoIsBiggest = rewire('../solution.js').__get__("whoIsBiggest");
        expect(whoIsBiggest.length).toBe(4);
    })
    test("function returns name of the person with the highest BMI", () => {
        const whoIsBiggest = rewire('../solution.js').__get__("whoIsBiggest");
        expect(whoIsBiggest('Frank', 'Mark', 80, 75)).toBe('Frank');
    });
})
