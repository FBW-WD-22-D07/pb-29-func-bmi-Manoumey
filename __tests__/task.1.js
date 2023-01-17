const rewire = require("rewire");

describe('1. Calculate BMI', () => {
    it("`calculateBMI` function exists", () => {
        const calculateBMI = rewire('../solution.js').__get__("calculateBMI");
        expect(calculateBMI()).toBeDefined();
    })
    it("function accepts 2 arguments", () => {
        const calculateBMI = rewire('../solution.js').__get__("calculateBMI");
        expect(calculateBMI.length).toBe(2);
    })
    it("function returns the BMI of a person", () => {
        const calculateBMI = rewire('../solution.js').__get__("calculateBMI");
        expect(parseFloat(calculateBMI(80, 175))).toBe(26.12);
    });
});