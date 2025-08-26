import { $applyNodeReplacement, ElementNode, SerializedElementNode } from "lexical";

export type SerializedWrapperNode = SerializedElementNode;

export class WrapperNode extends ElementNode {
  static override getType(): string {
    return "wrapper";
  }

  static override clone(node: WrapperNode): WrapperNode {
    return new WrapperNode(node.__key);
  }

  override isInline(): boolean {
    return true;
  }

  override createDOM(): HTMLSpanElement {
    // Define the DOM element here
    const dom = document.createElement("span");
    return dom;
  }

  static override importJSON(serializedNode: SerializedWrapperNode): WrapperNode {
    return $createWrapperNode().updateFromJSON(serializedNode);
  }

  override updateDOM(): boolean {
    // Returning false tells Lexical that this node does not need its
    // DOM element replacing with a new copy from createDOM.
    return false;
  }

  override exportJSON(): SerializedWrapperNode {
    return {
      ...super.exportJSON(),
      type: "wrapper",
      version: 1,
    };
  }
}

function $createWrapperNode(): WrapperNode {
  return $applyNodeReplacement(new WrapperNode());
}
