import { addClassNamesToElement } from "@lexical/utils";
import {
  $applyNodeReplacement,
  $isTextNode,
  EditorConfig,
  LexicalNode,
  NodeKey,
  RangeSelection,
} from "lexical";
import { Attributes, SerializedUsfmElementNode, UsfmElementNode } from "./UsfmElementNode.js";

const DEFAULT_TAG = "p";

export type SerializedUsfmParagraphNode = SerializedUsfmElementNode;

export class UsfmParagraphNode extends UsfmElementNode {
  constructor(attributes: Attributes = {}, tag?: string, key?: NodeKey) {
    super(attributes, undefined, tag, key);
  }

  static override getType(): string {
    return "usfmparagraph";
  }

  static override clone(node: UsfmParagraphNode): UsfmParagraphNode {
    return new UsfmParagraphNode(node.__attributes, node.__tag, node.__key);
  }

  static override importJSON(serializedNode: SerializedUsfmParagraphNode): UsfmParagraphNode {
    const { attributes, tag } = serializedNode;
    return $createUsfmParagraphNode(attributes, tag ?? DEFAULT_TAG).updateFromJSON(serializedNode);
  }

  override createDOM(config: EditorConfig): HTMLElement {
    const attributes = this.getAttributes() ?? {};
    const element = document.createElement(this.getTag() ?? DEFAULT_TAG);
    Object.keys(attributes).forEach((attKey) => {
      element.setAttribute(attKey, attributes[attKey]);
    });

    addClassNamesToElement(element, config.theme.sectionmark);
    return element;
  }

  override isInline(): boolean {
    return false;
  }

  override exportJSON(): SerializedUsfmParagraphNode {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      version: 1,
    };
  }

  override updateDOM(): boolean {
    return false;
  }

  override insertNewAfter(_: RangeSelection, restoreSelection: boolean): UsfmParagraphNode {
    const newElement = $createUsfmParagraphNode(this.getAttributes(), this.getTag());
    const direction = this.getDirection();
    newElement.setDirection(direction);
    this.insertAfter(newElement, restoreSelection);
    return newElement;
  }

  override collapseAtStart(): boolean {
    const children = this.getChildren();
    // If we have an empty (trimmed) first paragraph and try and remove it,
    // delete the paragraph as long as we have another sibling to go to
    if (
      children.length === 0 ||
      ($isTextNode(children[0]) && children[0].getTextContent().trim() === "")
    ) {
      const nextSibling = this.getNextSibling();
      if (nextSibling !== null) {
        this.selectNext();
        this.remove();
        return true;
      }
      const prevSibling = this.getPreviousSibling();
      if (prevSibling !== null) {
        this.selectPrevious();
        this.remove();
        return true;
      }
    }
    return false;
  }
}

export function $createUsfmParagraphNode(attributes?: Attributes, tag?: string): UsfmParagraphNode {
  return $applyNodeReplacement(new UsfmParagraphNode(attributes, tag));
}

export function $isUsfmParagraphNode(
  node: LexicalNode | null | undefined,
): node is UsfmParagraphNode {
  return node instanceof UsfmParagraphNode;
}
