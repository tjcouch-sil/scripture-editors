import { getLexicalState } from "../../../contentManager/index.js";
import perfDocument from "../../../data/tit.perf.js";
import lexicalState from "../../../data/tit.lexical.js";
import { FlatDocument } from "../../../plugins/PerfOperations/Types/Document.js";

describe("Testing Perf To Lexical", () => {
  it("should convert perf to lexical", () => {
    const lexicalPerfState = getLexicalState(perfDocument as FlatDocument);
    expect(lexicalPerfState).toEqual(lexicalState);
  });
});
