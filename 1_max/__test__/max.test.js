const max = require("../max");

test("Returns the max of given numbers divided with ';'", () => {
   expect(max("2;1;5;4;6;8;9;3;7")).toBe(9);
   expect(max("10;43;12;5;77;43;1")).toBe(77);
});