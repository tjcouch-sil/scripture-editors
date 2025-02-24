import { ParagraphNode } from "lexical";
import { BookNode } from "./BookNode";
import { ImmutableChapterNode } from "./ImmutableChapterNode";
import { ChapterNode } from "./ChapterNode";
import { VerseNode } from "./VerseNode";
import { CharNode } from "./CharNode";
import { NoteNode } from "./NoteNode";
import { MilestoneNode } from "./MilestoneNode";
import { ImpliedParaNode } from "./ImpliedParaNode";
import { ParaNode } from "./ParaNode";
import { MarkerNode } from "../../features/MarkerNode";
import { UnknownNode } from "../../features/UnknownNode";
import { ImmutableUnmatchedNode } from "../../features/ImmutableUnmatchedNode";

const scriptureUsjNodes = [
  BookNode,
  ImmutableChapterNode,
  ChapterNode,
  VerseNode,
  CharNode,
  NoteNode,
  MilestoneNode,
  MarkerNode,
  UnknownNode,
  ImmutableUnmatchedNode,
  ImpliedParaNode,
  ParaNode,
  {
    replace: ParagraphNode,
    withKlass: ParaNode,
    with: (node: ParaNode) => new ParaNode(node.__marker, node.__unknownAttributes),
  },
];
export default scriptureUsjNodes;
