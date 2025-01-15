//Složka
// tests/hooks
// Soubor
// hooks_tests.spec.js
import { expect } from "chai";
import { Calculator } from "../../src/calculator/calculator.js";

describe("Testy Hooků", () => {
  let calc;

  beforeEach(() => {
    console.log("běžím před každým item");
    calc = new Calculator();
  });

  it("calculator.add(1, 1) = 2", () => {
    expect(calc.add(1, 1)).to.eq(2);
  });

  it("calculator.subtract(10, 1) = 9", () => {
    expect(calc.subtract(10, 1)).to.eq(9);
  });

  it("calculator.multiple(5, 3) = 15", () => {
    expect(calc.multiple(5, 3)).to.eq(15);
  });

  it("calculator.divide(8, 2) = 4", () => {
    expect(calc.divide(8, 2)).to.eq(4);
  });
});
