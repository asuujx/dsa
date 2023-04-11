const rpn = require("../reversePolishNotation");

describe("RPN", () => {
  test("should convert string to rpn", () => {
    expect(rpn("4 * ( 5 - 6 / 3 + 1 ) ^ 2")).toBe("4,5,6,3,/,-,1,+,2,^,*");
  });
});
