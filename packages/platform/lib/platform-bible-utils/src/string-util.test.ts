import {
  at,
  charAt,
  codePointAt,
  endsWith,
  escapeStringRegexp,
  formatReplacementString,
  includes,
  indexOf,
  lastIndexOf,
  stringLength,
  normalize,
  padEnd,
  padStart,
  slice,
  split,
  startsWith,
  substring,
  toArray,
  ordinalCompare,
  testingStringUtils,
  transformAndEnsureRegExpRegExpArray,
  transformAndEnsureRegExpArray,
} from "./string-util";

const SHORT_SURROGATE_PAIRS_STRING = "Look𐐷At👨‍👩‍👧‍👦👮🏽‍♀️";
const SHORT_SURROGATE_PAIRS_ARRAY = ["L", "o", "o", "k", "𐐷", "A", "t", "👨‍👩‍👧‍👦", "👮🏽‍♀️"];

const MEDIUM_SURROGATE_PAIRS_STRING = "Look𐐷At🦄This𐐷Thing👮🏽‍♀️Its𐐷Awesome";
const MEDIUM_SURROGATE_PAIRS_ARRAY = ["Look", "At🦄This", "Thing👮🏽‍♀️Its", "Awesome"];

const LONG_SURROGATE_PAIRS_STRING =
  "Look𐐷At🦄All😎These😁Awesome🍕Symbols💩That🚀Are📷Represented👮🏽‍♀️By🍕Surrogate🔥Pairs💋!🌟";

const POS_FIRST_PIZZA = 25;
const POS_SECOND_PIZZA = 57;
const SURROGATE_PAIRS_STRING_LENGTH = 76;
const TEN_SPACES = "          ";
const SEVEN_XS = "XXXXXXX";

const NORMALIZE_STRING = "\u0041\u006d\u00e9\u006c\u0069\u0065";
const NORMALIZE_SURROGATE_PAIRS = "\u0041\u006d\u0065\u0301\u006c\u0069\u0065";

describe("at", () => {
  test("at with in bounds index", () => {
    const result = at(LONG_SURROGATE_PAIRS_STRING, 4);
    expect(result).toEqual("𐐷");
  });

  test("at with negative index returns last character", () => {
    const result = at(LONG_SURROGATE_PAIRS_STRING, -1);
    expect(result).toEqual("🌟");
  });

  test("at with index greater than length returns undefined", () => {
    const result = at(LONG_SURROGATE_PAIRS_STRING, stringLength(LONG_SURROGATE_PAIRS_STRING) + 10);
    expect(result).toEqual(undefined);
  });

  test("at with index smaller than -length returns undefined", () => {
    const result = at(LONG_SURROGATE_PAIRS_STRING, -stringLength(LONG_SURROGATE_PAIRS_STRING) - 10);
    expect(result).toEqual(undefined);
  });
});

describe("charAt", () => {
  test("0 < index < string length", () => {
    const result = charAt(MEDIUM_SURROGATE_PAIRS_STRING, 7);
    expect(result).toEqual("🦄");
  });

  test("index < 0", () => {
    const result = charAt(MEDIUM_SURROGATE_PAIRS_STRING, -2);
    expect(result).toEqual("");
  });

  test("index > string length", () => {
    const result = charAt(MEDIUM_SURROGATE_PAIRS_STRING, 50);
    expect(result).toEqual("");
  });
});

describe("codePointAt", () => {
  test("codePointAt for regular character", () => {
    const result = codePointAt(MEDIUM_SURROGATE_PAIRS_STRING, 11);
    expect(result).toEqual(115);
  });

  test("codePointAt for surrogate pair", () => {
    const result = codePointAt(MEDIUM_SURROGATE_PAIRS_STRING, 7);
    expect(result).toEqual(129412);
  });

  test("codePointAt index < 0", () => {
    const result = codePointAt(MEDIUM_SURROGATE_PAIRS_STRING, -1);
    expect(result).toEqual(undefined);
  });

  test("codePointAt index > string length", () => {
    const result = codePointAt(MEDIUM_SURROGATE_PAIRS_STRING, 50);
    expect(result).toEqual(undefined);
  });
});

describe("endsWith", () => {
  test("endsWith without position", () => {
    const result = endsWith(LONG_SURROGATE_PAIRS_STRING, "💋!🌟");
    expect(result).toEqual(true);
  });

  test("endsWith with position", () => {
    const result = endsWith(LONG_SURROGATE_PAIRS_STRING, "At🦄", 8);
    expect(result).toEqual(true);
  });
});

describe("indexOfClosestClosingCurlyBrace", () => {
  const curlyString =
    //           1           2
    // 23 456 78901 2 345678901 23456
    "Thi\\{s👮🏽‍♀️{is}👨‍👩‍👧‍👦\\}a {stri\\}ng}!";

  test("gets the closest un-escaped curly brace", () => {
    let result = testingStringUtils.indexOfClosestClosingCurlyBrace(curlyString, 0, false);
    expect(result).toBe(10);
    result = testingStringUtils.indexOfClosestClosingCurlyBrace(curlyString, 4, false);
    expect(result).toBe(10);
    result = testingStringUtils.indexOfClosestClosingCurlyBrace(curlyString, 10, false);
    expect(result).toBe(10);
    result = testingStringUtils.indexOfClosestClosingCurlyBrace(curlyString, 11, false);
    expect(result).toBe(25);
    result = testingStringUtils.indexOfClosestClosingCurlyBrace(curlyString, 16, false);
    expect(result).toBe(25);
    result = testingStringUtils.indexOfClosestClosingCurlyBrace(curlyString, 23, false);
    expect(result).toBe(25);
    result = testingStringUtils.indexOfClosestClosingCurlyBrace(curlyString, 25, false);
    expect(result).toBe(25);
  });

  test("gets the closest escaped curly brace", () => {
    let result = testingStringUtils.indexOfClosestClosingCurlyBrace(curlyString, 0, true);
    expect(result).toBe(13);
    result = testingStringUtils.indexOfClosestClosingCurlyBrace(curlyString, 4, true);
    expect(result).toBe(13);
    result = testingStringUtils.indexOfClosestClosingCurlyBrace(curlyString, 10, true);
    expect(result).toBe(13);
    result = testingStringUtils.indexOfClosestClosingCurlyBrace(curlyString, 11, true);
    expect(result).toBe(13);
    result = testingStringUtils.indexOfClosestClosingCurlyBrace(curlyString, 13, true);
    expect(result).toBe(13);
    result = testingStringUtils.indexOfClosestClosingCurlyBrace(curlyString, 16, true);
    expect(result).toBe(22);
    result = testingStringUtils.indexOfClosestClosingCurlyBrace(curlyString, 22, true);
    expect(result).toBe(22);
  });

  test("returns -1 when out of bounds or no more curly braces are found", () => {
    const strLength = stringLength(curlyString);
    let result = testingStringUtils.indexOfClosestClosingCurlyBrace(curlyString, -1, true);
    expect(result).toBe(-1);
    result = testingStringUtils.indexOfClosestClosingCurlyBrace(curlyString, -1, false);
    expect(result).toBe(-1);
    result = testingStringUtils.indexOfClosestClosingCurlyBrace(curlyString, -10, true);
    expect(result).toBe(-1);
    result = testingStringUtils.indexOfClosestClosingCurlyBrace(curlyString, -10, false);
    expect(result).toBe(-1);
    result = testingStringUtils.indexOfClosestClosingCurlyBrace(curlyString, strLength, true);
    expect(result).toBe(-1);
    result = testingStringUtils.indexOfClosestClosingCurlyBrace(curlyString, strLength, false);
    expect(result).toBe(-1);
    result = testingStringUtils.indexOfClosestClosingCurlyBrace(curlyString, strLength + 5, true);
    expect(result).toBe(-1);
    result = testingStringUtils.indexOfClosestClosingCurlyBrace(curlyString, strLength + 5, false);
    expect(result).toBe(-1);
    result = testingStringUtils.indexOfClosestClosingCurlyBrace(curlyString, 26, false);
    expect(result).toBe(-1);
    result = testingStringUtils.indexOfClosestClosingCurlyBrace(curlyString, 23, true);
    expect(result).toBe(-1);
  });
});

describe("formatReplacementString", () => {
  test("with curly braces", () => {
    const result = formatReplacementString("Look𐐷At🦄This𐐷{one-horned}Thing👮🏽‍♀️Its𐐷Awesome", {
      "one-horned": "Unicorn",
    });
    expect(result).toEqual("Look𐐷At🦄This𐐷UnicornThing👮🏽‍♀️Its𐐷Awesome");
  });

  test("with surrogate pairs in the escape sequence", () => {
    const result = formatReplacementString("Look𐐷At🦄This𐐷{one👮🏽‍♀️horned}Thing👮🏽‍♀️Its𐐷Awesome", {
      "one👮🏽‍♀️horned": "Unicorn",
    });
    expect(result).toEqual("Look𐐷At🦄This𐐷UnicornThing👮🏽‍♀️Its𐐷Awesome");
  });

  test("with curly braces at the start", () => {
    const result = formatReplacementString("{one-horned}Thing👮🏽‍♀️Its𐐷Awesome", {
      "one-horned": "Unicorn",
    });
    expect(result).toEqual("UnicornThing👮🏽‍♀️Its𐐷Awesome");
  });

  test("with curly braces as the whole string", () => {
    const result = formatReplacementString("{one-horned}", {
      "one-horned": "Unicorn",
    });
    expect(result).toEqual("Unicorn");
  });

  test("with curly braces and an empty string replacer", () => {
    const result = formatReplacementString("Look𐐷At🦄This𐐷{one-horned}Thing👮🏽‍♀️Its𐐷Awesome", {
      "one-horned": "",
    });
    expect(result).toEqual("Look𐐷At🦄This𐐷Thing👮🏽‍♀️Its𐐷Awesome");
  });

  test("with multiple pairs of curly braces", () => {
    const result = formatReplacementString("Look𐐷At🦄This𐐷{one-horned}Thing👮🏽‍♀️Its𐐷Awesome{sauce}", {
      "one-horned": "Unicorn",
      sauce: "ness",
    });
    expect(result).toEqual("Look𐐷At🦄This𐐷UnicornThing👮🏽‍♀️Its𐐷Awesomeness");
  });

  test("with empty curly braces", () => {
    const result = formatReplacementString("Look𐐷At🦄This𐐷{}", {
      "one-horned": "Unicorn",
    });
    expect(result).toEqual("Look𐐷At🦄This𐐷");
  });

  test("with unknown word in curly braces", () => {
    const result = formatReplacementString("Look𐐷At🦄This𐐷{UFO}", {
      "one-horned": "Unicorn",
    });
    expect(result).toEqual("Look𐐷At🦄This𐐷UFO");
  });

  test("with escaped curly braces", () => {
    const result = formatReplacementString("Look𐐷At🦄This𐐷\\{one-horned\\}Thing👮🏽‍♀️Its𐐷Awesome", {
      "one-horned": "Unicorn",
    });
    expect(result).toEqual("Look𐐷At🦄This𐐷{one-horned}Thing👮🏽‍♀️Its𐐷Awesome");
  });

  test("with multiple pairs of escaped curly braces", () => {
    const result = formatReplacementString(
      "Look𐐷At🦄This𐐷\\{one-horned\\}Thing👮🏽‍♀️Its𐐷Awesome\\{:)\\}",
      {
        "one-horned": "Unicorn",
        ":)": "smiley face",
      },
    );
    expect(result).toEqual("Look𐐷At🦄This𐐷{one-horned}Thing👮🏽‍♀️Its𐐷Awesome{:)}");
  });

  test("with curly braces and escaped curly braces", () => {
    const result = formatReplacementString("Hi, this is {name}! I like \\{curly braces\\}!", {
      name: "Jim",
    });
    expect(result).toEqual("Hi, this is Jim! I like {curly braces}!");
  });

  test("with multiple pairs of curly braces and escaped curly braces", () => {
    const result = formatReplacementString(
      "Hi, this is {name}! I like \\{curly braces\\}!Hi, this is {name}! I like \\{curly braces\\}!",
      {
        name: "Jim",
      },
    );
    expect(result).toEqual(
      "Hi, this is Jim! I like {curly braces}!Hi, this is Jim! I like {curly braces}!",
    );
  });

  test("with interesting types as keys and values", () => {
    const result = formatReplacementString(
      "Hi, this is {name}! I use {0} weights when I curl {weightLbs}lb weights. I do {1} reps {interval}. I have a weakness level of {weakness}.",
      {
        name: "Chad",
        0: "lead",
        weightLbs: 9000,
        1: 1000,
        interval: "every second of every day",
        weakness: undefined,
      },
    );
    expect(result).toEqual(
      "Hi, this is Chad! I use lead weights when I curl 9000lb weights. I do 1000 reps every second of every day. I have a weakness level of undefined.",
    );
  });
});

describe("includes", () => {
  test("includes without position", () => {
    const result = includes(LONG_SURROGATE_PAIRS_STRING, "🍕Symbols💩");
    expect(result).toEqual(true);
  });

  test("includes with position", () => {
    const result = includes(LONG_SURROGATE_PAIRS_STRING, "🦄All😎", 7);
    expect(result).toEqual(true);
  });

  test("includes with position that is to high, so no matches are found", () => {
    const result = includes(LONG_SURROGATE_PAIRS_STRING, "🦄All😎", 10);
    expect(result).toEqual(false);
  });
});

describe("indexOf", () => {
  test("indexOf without position", () => {
    const result = indexOf(LONG_SURROGATE_PAIRS_STRING, "🍕");
    expect(result).toEqual(POS_FIRST_PIZZA);
  });

  test("indexOf with position", () => {
    const result = indexOf(LONG_SURROGATE_PAIRS_STRING, "🍕", 40);
    expect(result).toEqual(POS_SECOND_PIZZA);
  });
});

describe("lastIndexOf", () => {
  test("lastIndexOf without position", () => {
    const result = lastIndexOf(LONG_SURROGATE_PAIRS_STRING, "🍕");
    expect(result).toEqual(POS_SECOND_PIZZA);
  });

  test("lastIndexOf with position", () => {
    const result = lastIndexOf(LONG_SURROGATE_PAIRS_STRING, "🍕", 5);
    expect(result).toEqual(-1);
  });
});

describe("length", () => {
  test("length is correct", () => {
    const result = stringLength(LONG_SURROGATE_PAIRS_STRING);
    expect(result).toEqual(SURROGATE_PAIRS_STRING_LENGTH);
  });
});

describe("normalize", () => {
  test("normalize with no forms, compare strings", () => {
    const regularStringResult = normalize(NORMALIZE_STRING, "none");
    const surrogatePairStringResult = normalize(NORMALIZE_SURROGATE_PAIRS, "none");
    expect(regularStringResult === surrogatePairStringResult).toEqual(false);
  });

  test("normalize with different forms, compare strings", () => {
    const NFCResult = normalize(NORMALIZE_STRING, "NFC");
    const NFDResult = normalize(NORMALIZE_SURROGATE_PAIRS, "NFD");
    expect(NFCResult === NFDResult).toEqual(false);
  });

  test("normalize with same form, compare strings", () => {
    const regularStringResult = normalize(NORMALIZE_STRING, "NFC");
    const surrogatePairStringResult = normalize(NORMALIZE_SURROGATE_PAIRS, "NFC");
    expect(regularStringResult === surrogatePairStringResult).toEqual(true);
  });

  test("normalize surrogate pairs string", () => {
    const result = normalize(NORMALIZE_SURROGATE_PAIRS, "NFC");
    expect(result).toEqual(NORMALIZE_STRING);
  });

  test("normalize surrogate pairs string as its own form", () => {
    const result = normalize(NORMALIZE_SURROGATE_PAIRS, "NFD");
    expect(result).toEqual(NORMALIZE_SURROGATE_PAIRS);
  });
});

describe("ordinalCompare", () => {
  it("should return a negative number if string1 comes before string2", () => {
    expect(ordinalCompare("👮🏽‍♀️", "🦄")).toBeLessThan(0);
  });

  it("should return a positive number if string1 comes after string2", () => {
    expect(ordinalCompare("🦄", "👮🏽‍♀️")).toBeGreaterThan(0);
  });

  it("should return 0 if string1 is equal to string2", () => {
    expect(ordinalCompare("🦄", "🦄")).toBe(0);
  });
});

describe("padEnd", () => {
  test("padEnd without padString", () => {
    const result = padEnd(
      LONG_SURROGATE_PAIRS_STRING,
      SURROGATE_PAIRS_STRING_LENGTH + 10,
      undefined,
    );
    expect(result).toEqual(LONG_SURROGATE_PAIRS_STRING + TEN_SPACES);
  });

  test("padEnd with padString", () => {
    const result = padEnd(LONG_SURROGATE_PAIRS_STRING, SURROGATE_PAIRS_STRING_LENGTH + 7, "X");
    expect(result).toEqual(LONG_SURROGATE_PAIRS_STRING + SEVEN_XS);
  });

  // Note: Limit with padString only works when length(padString) = 1, will be fixed with https://github.com/sallar/stringz/pull/59
  // It expects 10 'ha' but it should only give 5 'ha' because that would be length 10
  // limit only works when length(padString) = 1
  // ('padEnd with padString', () => {
  //   const result = padEnd(TEXT_STRING, TEST_STRING_LENGTH + 10, 'ha');
  //   expect(result).toEqual(`${TEXT_STRING}hahahahaha`);
  // });
});

describe("padStart", () => {
  test("padStart without padString", () => {
    const result = padStart(
      LONG_SURROGATE_PAIRS_STRING,
      SURROGATE_PAIRS_STRING_LENGTH + 10,
      undefined,
    );
    expect(result).toEqual(TEN_SPACES + LONG_SURROGATE_PAIRS_STRING);
  });

  test("padStart with padString", () => {
    const result = padStart(LONG_SURROGATE_PAIRS_STRING, SURROGATE_PAIRS_STRING_LENGTH + 7, "X");
    expect(result).toEqual(SEVEN_XS + LONG_SURROGATE_PAIRS_STRING);
  });

  // Note: Limit with padString only works when length(padString) = 1, will be fixed with https://github.com/sallar/stringz/pull/59
  // It expects 10 'ha' but it should only give 5 'ha' because that would be length 10
  // limit only works when length(padString) = 1
  // ('padStart with padString', () => {
  //   const result = padStart(TEST_STRING, TEST_STRING_LENGTH + 10, 'ha');
  //   expect(result).toEqual(`hahahahaha${TEST_STRING}`);
  // });
});

describe("slice", () => {
  test("start (-inf)-(-L)", () => {
    const result = slice(MEDIUM_SURROGATE_PAIRS_STRING, -100);
    expect(result).toEqual(MEDIUM_SURROGATE_PAIRS_STRING);
  });
  test("start (-L)-0", () => {
    const result = slice(MEDIUM_SURROGATE_PAIRS_STRING, -3);
    expect(result).toEqual("ome");
  });
  test("start 0-L", () => {
    const result = slice(MEDIUM_SURROGATE_PAIRS_STRING, 3);
    expect(result).toEqual("k𐐷At🦄This𐐷Thing👮🏽‍♀️Its𐐷Awesome");
  });
  test("start L-inf", () => {
    const result = slice(MEDIUM_SURROGATE_PAIRS_STRING, 50);
    expect(result).toEqual("");
  });
  test("start (-inf)-(-L) end (-inf)-(-L)", () => {
    const result = slice(MEDIUM_SURROGATE_PAIRS_STRING, -200, -100);
    expect(result).toEqual("");
  });
  test("start (-inf)-(-L) end (-L)-0", () => {
    const result = slice(MEDIUM_SURROGATE_PAIRS_STRING, -100, -10);
    expect(result).toEqual("Look𐐷At🦄This𐐷Thing👮🏽‍♀️I");
  });
  test("start (-inf)-(-L) end 0-L", () => {
    const result = slice(MEDIUM_SURROGATE_PAIRS_STRING, -100, 8);
    expect(result).toEqual("Look𐐷At🦄");
  });
  test("start (-inf)-(-L) end L-inf", () => {
    const result = slice(MEDIUM_SURROGATE_PAIRS_STRING, -100, 100);
    expect(result).toEqual(MEDIUM_SURROGATE_PAIRS_STRING);
  });
  test("start (-L)-0 end (-inf)-(-L)", () => {
    const result = slice(MEDIUM_SURROGATE_PAIRS_STRING, -5, -100);
    expect(result).toEqual("");
  });
  test("start (-L)-0 end (-L)-0", () => {
    const result = slice(MEDIUM_SURROGATE_PAIRS_STRING, -5, -10);
    expect(result).toEqual("");
  });

  test("start (-L)-0 end (-L)-0 and start < end", () => {
    const result = slice(MEDIUM_SURROGATE_PAIRS_STRING, -10, -5);
    expect(result).toEqual("ts𐐷Aw");
  });
  test("start (-L)-0 end 0-L", () => {
    const result = slice(MEDIUM_SURROGATE_PAIRS_STRING, -5, 8);
    expect(result).toEqual("");
  });
  test("start (-L)-0 end L-inf", () => {
    const result = slice(MEDIUM_SURROGATE_PAIRS_STRING, -5, 100);
    expect(result).toEqual("esome");
  });
  test("start 0-L end (-inf)-(-L)", () => {
    const result = slice(MEDIUM_SURROGATE_PAIRS_STRING, 5, -100);
    expect(result).toEqual("");
  });
  test("start 0-L end (-L)-0", () => {
    const result = slice(MEDIUM_SURROGATE_PAIRS_STRING, 5, -10);
    expect(result).toEqual("At🦄This𐐷Thing👮🏽‍♀️I");
  });
  test("start 0-L end 0-L", () => {
    const result = slice(MEDIUM_SURROGATE_PAIRS_STRING, 5, 8);
    expect(result).toEqual("At🦄");
  });
  test("start 0-L end 0-L, and start > end", () => {
    const result = slice(MEDIUM_SURROGATE_PAIRS_STRING, 8, 5);
    expect(result).toEqual("");
  });
  test("start 0-L end L-inf", () => {
    const result = slice(MEDIUM_SURROGATE_PAIRS_STRING, 5, 100);
    expect(result).toEqual("At🦄This𐐷Thing👮🏽‍♀️Its𐐷Awesome");
  });
  test("start L-inf end (-inf)-(-L)", () => {
    const result = slice(MEDIUM_SURROGATE_PAIRS_STRING, 50, -100);
    expect(result).toEqual("");
  });
  test("start L-inf end (-L)-0", () => {
    const result = slice(MEDIUM_SURROGATE_PAIRS_STRING, 50, -10);
    expect(result).toEqual("");
  });
  test("start L-inf end 0-L", () => {
    const result = slice(MEDIUM_SURROGATE_PAIRS_STRING, 50, 8);
    expect(result).toEqual("");
  });
  test("start L-inf end L-inf", () => {
    const result = slice(MEDIUM_SURROGATE_PAIRS_STRING, 50, 100);
    expect(result).toEqual("");
  });
  test("starting index is 0", () => {
    const str = "hello-someone.d.ts";
    expect(slice(str, 0)).toBe("hello-someone.d.ts");
    expect(slice(str, 0, 2)).toBe("he");
    expect(slice(str, 0, -stringLength(".d.ts"))).toBe("hello-someone");
  });
});

describe("split", () => {
  test("split without splitLimit", () => {
    const result = split(MEDIUM_SURROGATE_PAIRS_STRING, "𐐷");
    expect(result).toEqual(MEDIUM_SURROGATE_PAIRS_ARRAY);
  });

  test("split with splitLimit", () => {
    const result = split(MEDIUM_SURROGATE_PAIRS_STRING, "𐐷", 2);
    expect(result).toEqual(["Look", "At🦄This𐐷Thing👮🏽‍♀️Its𐐷Awesome"]);
  });

  test("split by empty string", () => {
    const result = split(SHORT_SURROGATE_PAIRS_STRING, "");
    expect(result).toEqual(SHORT_SURROGATE_PAIRS_ARRAY);
  });

  test("split by empty string with splitLimit", () => {
    const result = split(SHORT_SURROGATE_PAIRS_STRING, "", 3);
    expect(result).toEqual(["L", "o", "o"]);
  });

  test("split with RegExp separator", () => {
    const result = split(MEDIUM_SURROGATE_PAIRS_STRING, /[A-Z]/);
    expect(result).toEqual(["", "ook𐐷", "t🦄", "his𐐷", "hing👮🏽‍♀️", "ts𐐷", "wesome"]);
  });

  test("split with RegExp separator that contains surrogate pairs", () => {
    const result = split(MEDIUM_SURROGATE_PAIRS_STRING, /🦄/);
    expect(result).toEqual(["Look𐐷At", "This𐐷Thing👮🏽‍♀️Its𐐷Awesome"]);
  });

  test("split with RegExp separator that matches nothing in the string", () => {
    const result = split(MEDIUM_SURROGATE_PAIRS_STRING, /\d/);
    expect(result).toEqual([MEDIUM_SURROGATE_PAIRS_STRING]);
  });
});

describe("startsWith", () => {
  test("startsWith without position", () => {
    const result = startsWith(LONG_SURROGATE_PAIRS_STRING, "Look𐐷");
    expect(result).toEqual(true);
  });

  test("startsWith with position, searchString is not the start", () => {
    const result = startsWith(LONG_SURROGATE_PAIRS_STRING, "Look𐐷", 5);
    expect(result).toEqual(false);
  });

  test("startsWith with position, searchString is the start", () => {
    const result = startsWith(LONG_SURROGATE_PAIRS_STRING, "At🦄", 5);
    expect(result).toEqual(true);
  });
});

describe("substring", () => {
  test("substring with begin", () => {
    const result = substring(LONG_SURROGATE_PAIRS_STRING, POS_FIRST_PIZZA);
    expect(result).toEqual("🍕Symbols💩That🚀Are📷Represented👮🏽‍♀️By🍕Surrogate🔥Pairs💋!🌟");
  });

  test("substring with end", () => {
    const result = substring(LONG_SURROGATE_PAIRS_STRING, 0, POS_FIRST_PIZZA);
    expect(result).toEqual("Look𐐷At🦄All😎These😁Awesome");
  });

  test("substring with begin and end", () => {
    const result = substring(LONG_SURROGATE_PAIRS_STRING, POS_FIRST_PIZZA, POS_SECOND_PIZZA);
    expect(result).toEqual("🍕Symbols💩That🚀Are📷Represented👮🏽‍♀️By");
  });
});

describe("toArray", () => {
  test("toArray returns correct array", () => {
    const result = toArray(SHORT_SURROGATE_PAIRS_STRING);
    expect(result).toEqual(SHORT_SURROGATE_PAIRS_ARRAY);
  });
});

describe("escapeStringRegexp", () => {
  test("properly escapes stuff", () => {
    const result = escapeStringRegexp("How much $ for a 🦄?");
    expect(result).toEqual("How much \\$ for a 🦄\\?");
  });
});

describe("transformAndEnsureRegExpRegExpArray", () => {
  test("should return an empty array when input is undefined", () => {
    expect(transformAndEnsureRegExpRegExpArray(undefined)).toEqual([]);
  });

  test("should convert a single string to an array with one RegExp", () => {
    const input = "test";
    const result = transformAndEnsureRegExpRegExpArray(input);
    expect(result).toEqual([/test/]);
  });

  test("should convert an array of strings to an array of RegExp objects", () => {
    const input = ["test1", "test2", "test3"];
    const result = transformAndEnsureRegExpRegExpArray(input);
    expect(result).toEqual([/test1/, /test2/, /test3/]);
  });

  test("should convert nested arrays of strings to arrays of RegExp arrays", () => {
    const input = ["test1", ["nested1", "nested2"], "test2"];
    const result = transformAndEnsureRegExpRegExpArray(input);
    expect(result).toEqual([/test1/, [/nested1/, /nested2/], /test2/]);
  });

  test("should handle an array of single strings and nested arrays", () => {
    const input = ["a", ["b", "c"], "d"];
    const result = transformAndEnsureRegExpRegExpArray(input);
    expect(result).toEqual([/a/, [/b/, /c/], /d/]);
  });
});

describe("transformAndEnsureRegExpArray", () => {
  test("should return an empty array when input is undefined", () => {
    expect(transformAndEnsureRegExpArray(undefined)).toEqual([]);
  });

  test("should convert a single string to an array with one RegExp", () => {
    const input = "test";
    const result = transformAndEnsureRegExpArray(input);
    expect(result).toEqual([/test/]);
  });

  test("should convert an array of strings to an array of RegExp objects", () => {
    const input = ["test1", "test2", "test3"];
    const result = transformAndEnsureRegExpArray(input);
    expect(result).toEqual([/test1/, /test2/, /test3/]);
  });

  test("should handle empty strings in the input array", () => {
    const input = ["", "a", ""];
    const result = transformAndEnsureRegExpArray(input);
    expect(result).toEqual([/(?:)/, /a/, /(?:)/]);
  });
});
