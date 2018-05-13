import subject from "./index";

describe("module", () => {
  it("should work", () => {
    expect(subject("123 56")).toEqual(3);
    expect(subject("12 456")).toEqual(2);
    expect(subject("1 3")).toEqual(1);
    expect(subject("12 45 7")).toEqual(2);
    // 3 or 4 would be the same
    expect(subject("123 5 7")).toEqual(3);
    // 2 or 3 would be the same
    expect(subject("12 4 67")).toEqual(2);
    expect(subject("a")).toEqual(0);
    expect(subject("")).toEqual(0);
    expect(subject("123")).toEqual(0);
  });

  it("should throw error if argument is not a string", () => {
    const error = "Argument must be a string";
    expect(() => subject(null)).toThrow(error);
    expect(() => subject([])).toThrow(error);
    expect(() => subject({})).toThrow(error);
    expect(() => subject(undefined)).toThrow(error);
    expect(() => subject(0)).toThrow(error);
    expect(() => subject(1)).toThrow(error);
    expect(() => subject(1234)).toThrow(error);
  });
});
