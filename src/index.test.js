import subject from "./index";

describe("module", () => {
  it("should workd", () => {
    expect(subject("123 56")).toEqual(3);
    expect(subject("12 456")).toEqual(2);
    expect(subject("12 45 7")).toEqual(2);
    // 3 or 4 would be the same
    expect(subject("123 5 7")).toEqual(3);
    // 2 or 3 would be the same
    expect(subject("12 4 67")).toEqual(2);
    expect(subject("a")).toEqual(0);
    expect(subject("")).toEqual(0);
  });
});
