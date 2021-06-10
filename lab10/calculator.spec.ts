import { Calculator } from "./calculator";

describe('Calc', () => {
    let calc: Calculator;

    beforeEach(() => {
        calc = new Calculator();
    });

    it('should return correct sum of two number', () => {
        expect(calc).toBeInstanceOf(Calculator);
        expect(calc.Add(2,2)).toEqual(4);
    });

});