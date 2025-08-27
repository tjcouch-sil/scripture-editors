import {
  NodeBuildSource,
  convertBlock,
  convertContentElement,
  convertSequence,
} from "../perfToX.js";
import { FlatDocument, PerfDocument } from "../../../plugins/PerfOperations/Types/Document.js";
import { PerfKind } from "../../../plugins/PerfOperations/types.js";
import Sequence from "../../../plugins/PerfOperations/Types/Sequence.js";
import Block from "../../../plugins/PerfOperations/Types/Block.js";
import ContentElement from "../../../plugins/PerfOperations/Types/ContentElement.js";
import { PerfMap, mapPerf } from "../perfMapper.js";
import { PerfLexicalNode, createPerfToLexicalMap } from "./perfToLexicalMap.js";
import { SerializedEditorState, SerializedLexicalNode } from "lexical";

export const transformPerfDocumentToSerializedLexicalState = (
  perfDocument: PerfDocument,
  sequenceId: string,
  perfMap?: PerfMap<PerfLexicalNode>,
) => {
  if (!isFlatDocument(perfDocument)) throw new Error("No sequences found in the PERF document");
  const nodeAdapter = (buildSource: NodeBuildSource<PerfKind, PerfLexicalNode>) => {
    const map = mapPerf({
      buildSource: buildSource,
      perfMap: perfMap ?? createPerfToLexicalMap(perfDocument.sequences),
    });
    return map;
  };

  return {
    root: convertSequence<PerfLexicalNode>({
      sequence: perfDocument.sequences[sequenceId],
      sequenceId,
      nodeBuilder: nodeAdapter,
    }),
  } as SerializedEditorState | SerializedLexicalNode;
};
export default transformPerfDocumentToSerializedLexicalState;

function isFlatDocument(doc: PerfDocument): doc is FlatDocument {
  return typeof doc === "object" && doc !== null && "sequences" in doc && "main_sequence_id" in doc;
}

type NodeSource =
  | { node: Sequence; kind: PerfKind.Sequence; sequenceId?: string }
  | { node: Block; kind: PerfKind.Block }
  | { node: ContentElement; kind: PerfKind.ContentElement };

export function transformPerfNodeToSerializedLexicalNode({
  source,
  perfSequences,
  perfMap,
}: {
  source: NodeSource;
  perfSequences: FlatDocument["sequences"];
  perfMap?: PerfMap<PerfLexicalNode>;
}) {
  const { node, kind } = source;

  const _perfMap = perfMap ?? createPerfToLexicalMap(perfSequences);
  const nodeBuilder = (props: NodeBuildSource<PerfKind, PerfLexicalNode>) => {
    return mapPerf({
      buildSource: props,
      perfMap: _perfMap,
    });
  };
  if (kind === PerfKind.Sequence) {
    return convertSequence<PerfLexicalNode>({
      sequence: node,
      sequenceId: source.sequenceId ?? "",
      nodeBuilder,
    });
  }
  if (kind === PerfKind.Block) {
    return convertBlock<PerfLexicalNode>({
      block: node,
      nodeBuilder,
    });
  }
  if (kind === "contentElement") {
    return convertContentElement<PerfLexicalNode>({
      element: node,
      nodeBuilder,
    });
  }
  throw new Error(`Unsupported kind: ${kind}`);
}
