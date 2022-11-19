const Dog = require("../src/contoller");

describe("constructor", () => {
  it("will instantiate a new instance of Pet", () => {
    expect(new Dog("Frank")).toBeInstanceOf(Object);
  });
});
