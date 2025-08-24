import { SerializedElementNode } from "lexical";
import {
  Block,
  ContentElement,
  PerfKind,
  transformLexicalStateToPerf,
  transformPerfNodeToSerializedLexicalNode,
} from "shared";

import { emptyFootnote } from "./emptyFootnote";
import { emptyCrossRefence } from "./emptyCrossReference";
import { emptyHeading } from "./emptyHeading";

function roundTripLexicalContentElement(node: SerializedElementNode) {
  const perfState = transformLexicalStateToPerf(node, PerfKind.ContentElement);
  if (!perfState.result) return;
  return transformPerfNodeToSerializedLexicalNode({
    source: {
      node: perfState.result as ContentElement,
      kind: PerfKind.ContentElement,
    },
    perfSequences: perfState.sequences,
  });
}

function roundTripLexicalBlock(node: SerializedElementNode) {
  const perfState = transformLexicalStateToPerf(node, PerfKind.Block);
  if (!perfState.result) return;
  return transformPerfNodeToSerializedLexicalNode({
    source: {
      node: perfState.result as Block,
      kind: PerfKind.Block,
    },
    perfSequences: perfState.sequences,
  });
}

describe("Testing empty nodes", () => {
  it("Should roundtrip empty footnote", () => {
    const roundtrippedLexicalState = roundTripLexicalContentElement(
      emptyFootnote as SerializedElementNode,
    );
    expect(roundtrippedLexicalState).toEqual(emptyFootnote);
  });
  it("Should roundtrip empty cross reference", () => {
    const roundtrippedLexicalState = roundTripLexicalContentElement(
      emptyCrossRefence as SerializedElementNode,
    );
    expect(roundtrippedLexicalState).toEqual(emptyCrossRefence);
  });
  it("Should roundtrip empty heading", () => {
    const roundtrippedLexicalState = roundTripLexicalBlock(emptyHeading as SerializedElementNode);
    expect(roundtrippedLexicalState).toEqual(emptyHeading);
  });
});
