import { DivisionMarkNode } from "./DivisionMarkNode";
import { GraftNode } from "./GraftNode";
import { InlineNode } from "./InlineNode";
import { UsfmParagraphNode } from "./UsfmParagraphNode";
import { WrapperNode } from "./WrapperNode";
import { Klass, LexicalNode, LexicalNodeReplacement } from "lexical";

export const scriptureNodes = [
  WrapperNode,
  DivisionMarkNode,
  GraftNode,
  InlineNode,
  UsfmParagraphNode,
];

export const scripturePerfNodes = <Array<Klass<LexicalNode> | LexicalNodeReplacement>>[
  ...scriptureNodes,
];

export * from "./DivisionMarkNode";
export * from "./GraftNode";
export * from "./InlineNode";
export * from "./UsfmElementNode";
export * from "./UsfmParagraphNode";
export * from "./WrapperNode";
