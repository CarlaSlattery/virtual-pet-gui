const Dog = require("../src/contoller");

describe("constructor", () => {
  it("returns an object", () => {
    expect(new Dog("Frank")).toBeInstanceOf(Object);
  });
});
