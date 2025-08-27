import { handleSubtypeNS } from "./utils.js";

describe("Converter Utils:handleSubtypeNS", () => {
  it("should create subtype data", () => {
    const subtypeData = handleSubtypeNS("a:b");
    expect(subtypeData).toEqual({ subtype: "b", "subtype-ns": "a" });
  });
});
