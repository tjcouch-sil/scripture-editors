import { $applyNodeReplacement, EditorConfig, NodeKey } from "lexical";
import { Attributes, SerializedUsfmElementNode, UsfmElementNode } from "./UsfmElementNode.js";
import { addClassNamesToElement } from "@lexical/utils";

export type SerializedInlineNode = SerializedUsfmElementNode;

export class InlineNode extends UsfmElementNode {
  constructor(attributes: Attributes = {}, key?: NodeKey) {
    super(attributes, undefined, "span", key);
  }

  static override getType(): string {
    return "inline";
  }

  static override clone(node: InlineNode): InlineNode {
    return new InlineNode(node.__attributes, node.__key);
  }

  override isInline(): boolean {
    return true;
  }

  override createDOM(config: EditorConfig): HTMLSpanElement {
    const element = document.createElement("span");
    const attributes = this.getAttributes() ?? {};
    Object.keys(attributes).forEach((attKey) => {
      element.setAttribute(attKey, attributes[attKey]);
    });
    addClassNamesToElement(element, config.theme.sectionmark);
    return element;
  }

  static override importJSON(serializedNode: SerializedInlineNode): InlineNode {
    const { attributes } = serializedNode;
    return $createInlineNode(attributes).updateFromJSON(serializedNode);
  }

  override exportJSON(): SerializedInlineNode {
    return {
      ...super.exportJSON(),
      type: "inline",
      version: 1,
    };
  }

  override updateDOM(): boolean {
    // Returning false tells Lexical that this node does not need its
    // DOM element replacing with a new copy from createDOM.
    return false;
  }
}

function $createInlineNode(attributes?: Attributes): InlineNode {
  return $applyNodeReplacement(new InlineNode(attributes));
}
