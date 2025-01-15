// složka: functions-tests
//calculator_tests.spec.js
import { expect } from "chai";
import { Calculator } from "../../src/calculator/calculator.js";

describe("Testy Calculator", () => {
  it("calculator.add(1, 1) = 2", () => {
    const calc = new Calculator();
    expect(calc.add(1, 1)).to.eq(2);
  });

  it("calculator.subtract(10, 1) = 9", () => {
    const calc = new Calculator();
    expect(calc.subtract(10, 1)).to.eq(9);
  });

  it("calculator.multiple(5, 3) = 15", () => {
    const calc = new Calculator();
    expect(calc.multiple(5, 3)).to.eq(15);
  });

  it("calculator.divide(8, 2) = 4", () => {
    const calc = new Calculator();
    expect(calc.divide(8, 2)).to.eq(4);
  });
});
