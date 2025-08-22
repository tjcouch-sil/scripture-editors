import { addClassNamesToElement } from "@lexical/utils";
import { $applyNodeReplacement, EditorConfig, LexicalNode, NodeKey } from "lexical";
import { Attributes, SerializedUsfmElementNode, UsfmElementNode } from "./UsfmElementNode.js";

const DEFAULT_TAG = "span";

export type SerializedDivisionMarkNode = SerializedUsfmElementNode;

export class DivisionMarkNode extends UsfmElementNode {
  static override getType(): string {
    return "divisionmark";
  }

  static override clone(node: DivisionMarkNode): DivisionMarkNode {
    return new DivisionMarkNode(node.__attributes, node.__tag, node.__key);
  }

  constructor(attributes: Attributes = {}, tag?: string, key?: NodeKey) {
    super(attributes, undefined, tag, key);
  }

  static override importJSON(serializedNode: SerializedDivisionMarkNode) {
    const { attributes, tag } = serializedNode;
    return $createDivisionMarkNode(attributes, tag ?? DEFAULT_TAG).updateFromJSON(serializedNode);
  }

  override canBeEmpty(): boolean {
    return false;
  }

  override canInsertTextAfter(): boolean {
    return true;
  }

  override createDOM(config: EditorConfig): HTMLSpanElement {
    const element = document.createElement(this.getTag() ?? DEFAULT_TAG);
    const attributes = this.getAttributes();

    Object.keys(attributes).forEach((attKey) => {
      element.setAttribute(attKey, attributes[attKey]);
    });
    addClassNamesToElement(element, config.theme.sectionmark);
    return element;
  }

  override isInline(): boolean {
    return true;
  }

  override exportJSON(): SerializedDivisionMarkNode {
    return {
      ...super.exportJSON(),
      type: "divisionmark",
      version: 1,
    };
  }

  override updateDOM(_prevNode: DivisionMarkNode, element: HTMLElement): boolean {
    const newNumber = element.innerText;
    if (!this.__attributes["perf-atts-number"]) return false;
    this.__attributes["perf-atts-number"] = newNumber;
    element.setAttribute("perf-atts-number", newNumber);
    // Returning false tells Lexical that this node does not need its
    // DOM element replacing with a new copy from createDOM.
    return false;
  }
}

export function $createDivisionMarkNode(attributes?: Attributes, tag?: string): DivisionMarkNode {
  return $applyNodeReplacement(new DivisionMarkNode(attributes, tag));
}

export function $isDivisionMarkNode(
  node: LexicalNode | null | undefined,
): node is DivisionMarkNode {
  return node instanceof DivisionMarkNode;
}
