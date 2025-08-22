import perfDocument from "../../../data/tit.perf.js";
import lexicalState from "../../../data/tit.lexical.js";
import transformLexicalStateToPerf from "./index.js";
import { SerializedUsfmElementNode } from "../../../nodes/UsfmElementNode.js";
import { PerfKind } from "../../../plugins/PerfOperations/types.js";

describe("Testing Perf To Lexical", () => {
  it("should roundtrip perf to lexical and back", () => {
    const perfResult = transformLexicalStateToPerf(
      lexicalState.root as SerializedUsfmElementNode,
      PerfKind.Sequence,
    );
    const perfNode = {
      ...perfDocument,
      sequences: { ...perfResult.sequences, [perfDocument.main_sequence_id]: perfResult.result },
    };
    expect(perfNode).toEqual(perfDocument);
  });
});
