import { absolute, currencies } from "./lib";

describe("absolute", () => {
  it("should return 1", () => {
    const result = absolute(1);
    expect(result).toBe(1);
  });
  it("should return 0", () => {
    const result = absolute(0);
    expect(result).toBe(0);
  });
  it("should return 1", () => {
    const result = absolute(-1);
    expect(result).toBe(1);
  });
});

describe("currencies", () => {
  it("should return array with elements usd, gbp, and euro", () => {
    const result = currencies();
    expect(result).toEqual(expect.arrayContaining(["euro", "usd"]));
  });
});
