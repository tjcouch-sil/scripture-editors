/** Utility functions for editor nodes */

import { MARKER_OBJECT_PROPS, MarkerObject } from "@biblionexus-foundation/scripture-utilities";
import { $isElementNode, LexicalNode, SerializedLexicalNode } from "lexical";
import { isChapterNumberElement } from "./ImmutableChapterNumberNode";
import { ImmutableVerseNode } from "./ImmutableVerseNode";
import { ChapterNode } from "./ChapterNode";
import { VerseNode } from "./VerseNode";
import { CharNode, SerializedCharNode } from "./CharNode";

export type UnknownAttributes = { [name: string]: string | undefined };

// If you want use these utils with your own verse node, add it to this list of types.
type VerseNodes = VerseNode | ImmutableVerseNode;

/** RegEx to test for a string only containing digits. */
export const ONLY_DIGITS_TEST = /^\d+$/;

// Can't use `CharNode.getType()` as that sets up a circular dependency.
export const CHAR_NODE_TYPE = "char";

export const NBSP = "\xa0";
export const CHAPTER_CLASS_NAME = "chapter";
export const VERSE_CLASS_NAME = "verse";
export const TEXT_SPACING_CLASS_NAME = "text-spacing";
export const FORMATTED_FONT_CLASS_NAME = "formatted-font";

const NUMBERED_MARKER_PLACEHOLDER = "#";

/**
 * Check if the marker is valid and numbered.
 * @param marker - Marker to check.
 * @param numberedMarkers - List of valid numbered markers.
 * @returns true if the marker is a valid numbered marker, false otherwise.
 */
export function isValidNumberedMarker(marker: string, numberedMarkers: string[]): boolean {
  // Starts with a valid numbered marker.
  const numberedMarker = numberedMarkers.find((markerNumbered) =>
    marker.startsWith(markerNumbered),
  );
  if (!numberedMarker) return false;

  // Ends with a number.
  const maybeNumber = marker.slice(numberedMarker.length);
  return ONLY_DIGITS_TEST.test(maybeNumber);
}

/**
 * Extracts a list of numbered markers with the '#' removed.
 * @param markers - List of markers containing placeholder numbered markers, e.g. ['p', 'pi#'].
 * @returns list of numbered markers (non-numbered are filtered out) with the '#' removed,
 *   e.g. ['pi'].
 */
export function extractNumberedMarkers(markers: string[] | readonly string[]): string[] {
  return (
    markers
      .filter((marker) => marker.endsWith(NUMBERED_MARKER_PLACEHOLDER))
      // remove placeholder
      .map((marker) => marker.slice(0, -1))
  );
}

/**
 * Extracts a list of non-numbered markers.
 * @param markers - List of markers containing placeholder numbered markers, e.g. ['p', 'pi#'].
 * @returns list of non-numbered markers (numbered are filtered out), e.g. ['p'].
 */
export function extractNonNumberedMarkers(markers: string[] | readonly string[]): string[] {
  return markers.filter((marker) => !marker.endsWith(NUMBERED_MARKER_PLACEHOLDER));
}

/**
 * Finds the chapter node with the given chapter number amongst the nodes.
 * @param nodes - Nodes to look in.
 * @param chapterNum - Chapter number to look for.
 * @returns the chapter node if found, `undefined` otherwise.
 */
export function findChapter(nodes: LexicalNode[], chapterNum: number) {
  return nodes.find(
    (node) =>
      node.getType() === ChapterNode.getType() &&
      (node as ChapterNode).getNumber() === chapterNum.toString(),
  ) as ChapterNode | undefined;
}

/**
 * Finds the next chapter.
 * @param nodes - Nodes to look in.
 * @param isCurrentChapterAtFirstNode - If `true` ignore the first node.
 * @returns the next chapter node if found, `undefined` otherwise.
 */
export function findNextChapter(nodes: LexicalNode[], isCurrentChapterAtFirstNode = false) {
  return nodes.find(
    (node, index) =>
      (!isCurrentChapterAtFirstNode || index > 0) && node.getType() === ChapterNode.getType(),
  ) as ChapterNode | undefined;
}

/**
 * Find the chapter that this node is in.
 * @param node - Node to find the chapter it's in.
 * @returns the chapter node if found, `undefined` otherwise.
 */
export function findThisChapter(node: LexicalNode | null | undefined) {
  if (!node) return;

  // is this node a chapter
  if (node.getType() === ChapterNode.getType()) return node as ChapterNode;

  // is the chapter a previous top level sibling
  let previousSibling = node.getTopLevelElement()?.getPreviousSibling();
  while (previousSibling && previousSibling.getType() !== ChapterNode.getType()) {
    previousSibling = previousSibling.getPreviousSibling();
  }
  if (previousSibling && previousSibling.getType() === ChapterNode.getType())
    return previousSibling as ChapterNode;
}

/**
 * Find the given verse in the children of the node.
 * @param node - Node with potential verses in children.
 * @param verseNum - Verse number to look for.
 * @param VerseNodeClass - Use a different verse node class if needed.
 * @returns the verse node if found, `undefined` otherwise.
 */
export function findVerseInNode<T extends VerseNodes = ImmutableVerseNode>(
  node: LexicalNode,
  verseNum: number,
  VerseNodeClass: typeof LexicalNode = ImmutableVerseNode,
) {
  if (!$isElementNode(node)) return;

  const children = node.getChildren();
  const verseNode = children.find(
    (node) =>
      node.getType() === VerseNodeClass.getType() &&
      (node as T).getNumber() === verseNum.toString(),
  );
  return verseNode as T | undefined;
}

/**
 * Finds the verse node with the given verse number amongst the children of nodes.
 * @param nodes - Nodes to look in.
 * @param verseNum - Verse number to look for.
 * @param VerseNodeClass - Use a different verse node class if needed.
 * @returns the verse node if found, `undefined` otherwise.
 */
export function findVerse<T extends VerseNodes = ImmutableVerseNode>(
  nodes: LexicalNode[],
  verseNum: number,
  VerseNodeClass: typeof LexicalNode = ImmutableVerseNode,
) {
  return (
    nodes
      .map((node) => findVerseInNode<T>(node, verseNum, VerseNodeClass))
      // remove any undefined results and take the first found
      .filter((verseNode) => verseNode)[0] as T | undefined
  );
}

/**
 * Find the next verse in the children of the node.
 * @param node - Node with potential verses in children.
 * @param VerseNodeClass - Use a different verse node class if needed.
 * @returns the verse node if found, `undefined` otherwise.
 */
export function findNextVerseInNode<T extends VerseNodes = ImmutableVerseNode>(
  node: LexicalNode,
  VerseNodeClass: typeof LexicalNode = ImmutableVerseNode,
) {
  if (!$isElementNode(node)) return;
  const children = node.getChildren();
  const verseNode = children.find((node) => node.getType() === VerseNodeClass.getType());
  return verseNode as T | undefined;
}

/**
 * Finds the next verse node amongst the children of nodes.
 * @param nodes - Nodes to look in.
 * @param VerseNodeClass - Use a different verse node class if needed.
 * @returns the verse node if found, `undefined` otherwise.
 */
export function findNextVerse<T extends VerseNodes = ImmutableVerseNode>(
  nodes: LexicalNode[],
  VerseNodeClass: typeof LexicalNode = ImmutableVerseNode,
) {
  return (
    nodes
      .map((node) => findNextVerseInNode<T>(node, VerseNodeClass))
      // remove any undefined results and take the first found
      .filter((verseNode) => verseNode)[0]
  );
}

/**
 * Find the last verse in the children of the node.
 * @param node - Node with potential verses in children.
 * @param VerseNodeClass - Use a different verse node class if needed.
 * @returns the verse node if found, `undefined` otherwise.
 */
export function findLastVerseInNode<T extends VerseNodes = ImmutableVerseNode>(
  node: LexicalNode | null | undefined,
  VerseNodeClass: typeof LexicalNode = ImmutableVerseNode,
) {
  if (!node || !$isElementNode(node)) return;

  const children = node.getChildren();
  const verseNode = children.findLast((node) => node.getType() === VerseNodeClass.getType());
  return verseNode as T | undefined;
}

/**
 * Finds the last verse node amongst the children of nodes.
 * @param nodes - Nodes to look in.
 * @param VerseNodeClass - Use a different verse node class if needed.
 * @returns the verse node if found, `undefined` otherwise.
 */
export function findLastVerse<T extends VerseNodes = ImmutableVerseNode>(
  nodes: LexicalNode[],
  VerseNodeClass: typeof LexicalNode = ImmutableVerseNode,
) {
  const verseNodes = nodes
    .map((node) => findLastVerseInNode<T>(node, VerseNodeClass))
    // remove any undefined results
    .filter((verseNode) => verseNode);
  if (verseNodes.length <= 0) return;

  return verseNodes[verseNodes.length - 1];
}

/**
 * Find the verse that this node is in.
 * @param node - Node to find the verse it's in.
 * @param VerseNodeClass - Use a different verse node class if needed.
 * @returns the verse node if found, `undefined` otherwise.
 */
export function findThisVerse<T extends VerseNodes = ImmutableVerseNode>(
  node: LexicalNode | null | undefined,
  VerseNodeClass: typeof LexicalNode = ImmutableVerseNode,
): T | undefined {
  if (!node) return;

  // is this node a verse
  if (node.getType() === VerseNodeClass.getType()) return node as T;

  // is one of the previous sibling nodes a verse
  let previousSibling = node.getPreviousSibling();
  while (previousSibling && previousSibling.getType() !== VerseNodeClass.getType()) {
    previousSibling = previousSibling.getPreviousSibling();
  }
  if (previousSibling && previousSibling.getType() === VerseNodeClass.getType())
    return previousSibling as T;

  // is the verse in a previous parent sibling
  let previousParentSibling = node.getTopLevelElement()?.getPreviousSibling();
  let verseNode = findLastVerseInNode<T>(previousParentSibling, VerseNodeClass);
  let nextVerseNode = verseNode;
  while (previousParentSibling && !verseNode) {
    verseNode = nextVerseNode;
    previousParentSibling = previousParentSibling.getPreviousSibling();
    nextVerseNode = findLastVerseInNode<T>(previousParentSibling, VerseNodeClass);
  }
  return verseNode;
}

/**
 * Remove the given node and all the nodes after.
 * @param nodes - Nodes to prune.
 * @param firstNode - First node in nodes.
 * @param pruneNode - Node to prune and all nodes after.
 */
export function removeNodeAndAfter(
  nodes: LexicalNode[],
  firstNode: LexicalNode,
  pruneNode: LexicalNode | undefined,
) {
  if (pruneNode) {
    // prune node and after
    nodes.length = pruneNode.getIndexWithinParent() - firstNode.getIndexWithinParent();
  }
}

/**
 * Removes all the nodes that proceed the given node.
 * @param nodes - Nodes to prune.
 * @param firstNode - Node to prune before.
 * @returns the nodes from the node and after.
 */
export function removeNodesBeforeNode(
  nodes: LexicalNode[],
  firstNode: LexicalNode | undefined,
): LexicalNode[] {
  if (!firstNode) return nodes;

  return nodes.splice(firstNode.getIndexWithinParent(), nodes.length - 1);
}

/**
 * Gets the opening marker text.
 * @param marker - Verse marker.
 * @returns the opening marker text.
 */
export function openingMarkerText(marker: string): string {
  return `\\${marker}`;
}

/**
 * Gets the closing marker text.
 * @param marker - Verse marker.
 * @returns the closing marker text.
 */
export function closingMarkerText(marker: string): string {
  return `\\${marker}*`;
}

/**
 * Gets the open marker text with the marker visible.
 * @param marker - Verse marker.
 * @param content - Content such as chapter or verse number.
 * @returns the marker text with the open marker visible.
 */
export function getVisibleOpenMarkerText(marker: string, content: string | undefined): string {
  let text = openingMarkerText(marker);
  if (content) text += `${NBSP}${content}`;
  text += " ";
  return text;
}

/**
 * Parse number from marker text.
 * @param marker - Chapter or verse marker.
 * @param text - Text to parse.
 * @param number - Default number to use if none is found.
 * @returns the parsed number or the default value as a string.
 */
export function parseNumberFromMarkerText(
  marker: string,
  text: string | undefined,
  number: string,
): string {
  const openMarkerText = openingMarkerText(marker);
  if (text && text.startsWith(openMarkerText)) {
    const numberText = parseInt(text.slice(openMarkerText.length), 10);
    if (!isNaN(numberText)) number = numberText.toString();
  }
  return number;
}

/**
 * Gets the preview text for a serialized note caller.
 * @param childNodes - Child nodes of the NoteNode.
 * @returns the preview text.
 */
export function getPreviewTextFromSerializedNodes(childNodes: SerializedLexicalNode[]): string {
  const previewText = childNodes
    .reduce(
      (text, node) =>
        text + (node.type === CHAR_NODE_TYPE ? ` ${(node as SerializedCharNode).text}` : ""),
      "",
    )
    .trim();
  return previewText;
}

/**
 * Get editable note caller text.
 * @param noteCaller - Note caller.
 * @returns caller text.
 */
export function getEditableCallerText(noteCaller: string): string {
  return NBSP + noteCaller + " ";
}

/**
 * Gets the preview text for a note caller.
 * @param childNodes - Child nodes of the NoteNode.
 * @returns the preview text.
 */
export function getNoteCallerPreviewText(childNodes: LexicalNode[]): string {
  const previewText = childNodes
    .reduce(
      (text, node) =>
        text + (node.getType() === CHAR_NODE_TYPE ? ` ${(node as CharNode).getTextContent()}` : ""),
      "",
    )
    .trim();
  return previewText;
}

/**
 * Remove all known properties of the `markerObject`.
 * @param markerObject - Scripture marker and its contents.
 * @returns all the unknown properties or `undefined` if all are known.
 */
export function getUnknownAttributes(markerObject: MarkerObject): UnknownAttributes | undefined {
  const attributes: Partial<MarkerObject> = { ...markerObject };
  MARKER_OBJECT_PROPS.forEach((property) => delete attributes[property]);
  return Object.keys(attributes).length === 0 ? undefined : (attributes as UnknownAttributes);
}

/**
 * Checks if the given element is an ImmutableChapterNumberNode or a child of one.
 *
 * This function traverses up the DOM tree from the given element, checking each ancestor until it
 * finds an ImmutableChapterNumberNode or reaches the top of the tree.
 *
 * @param element - The HTML element to check. This is typically the target of a mouse event.
 *
 * @returns `true` if the element is an ImmutableChapterNumberNode or is a descendant of an
 *   ImmutableChapterNumberNode. Returns `false` otherwise.
 *
 * @example
 * // Assuming 'event' is a MouseEvent:
 * const shouldPreventContextMenu = isImmutableChapterNumberOrChild(event.target as HTMLElement);
 *
 * @remarks
 * This function is useful for handling events that might bubble up from child elements of an
 * ImmutableChapterNumberNode. It ensures that we correctly identify clicks or other interactions
 * that should be treated as targeting the ImmutableChapterNumberNode, even if they technically
 * occurred on a child element.
 */
export function isChapterNumberOrChild(element: HTMLElement | null | undefined): boolean {
  while (element) {
    if (isChapterNumberElement(element)) {
      return true;
    }
    element = element.parentElement;
  }
  return false;
}

/**
 * Checks if the given HTML element is an editor input.
 *
 * @param element - The HTML element to check.
 * @param editorInputClassName - The class name that identifies an editor input. Defaults to "editor-input".
 * @returns `true` if the element is an editor input, `false` otherwise.
 */
export function isEditorInput(
  element: HTMLElement | null | undefined,
  editorInputClassName = "editor-input",
): boolean {
  return !!element && element.classList.contains(editorInputClassName);
}

/**
 * Determines if the given HTML element represents an immutable chapter.
 *
 * @param element - The HTML element to check.
 * @returns `true` if the element is an immutable chapter, `false` otherwise.
 */
export function isImmutableChapter(element: HTMLElement | null | undefined): boolean {
  if (!element) return false;

  const oneChild = element.children.length === 1 ? (element.children[0] as HTMLElement) : undefined;
  return (
    element.classList.contains(ChapterNode.getType()) &&
    !!oneChild &&
    isChapterNumberOrChild(oneChild)
  );
}

/**
 * Finds the nearest element with a specified class name within a container,
 * based on the given x and y coordinates.
 *
 * @param container - The HTML element to search within.
 * @param className - The class name to search for.
 * @param x - The x-coordinate of the point to measure distance from (usually the click
 *   x-coordinate).
 * @param y - The y-coordinate of the point to measure distance from (usually the click
 *   y-coordinate).
 * @returns The nearest HTMLElement with the specified class, or `undefined`` if no matching element
 *   is found.
 *
 * @remarks
 * This function measures the distance from the given (x, y) coordinates to the center of each
 * element with the specified class name. It returns the element with the shortest distance.
 *
 * The function uses `getBoundingClientRect()` to calculate element positions, which may trigger a
 * reflow. Consider caching element positions if performance becomes an issue with many elements.
 */
export function findNearestElementOfClass(
  container: HTMLElement,
  className: string,
  x: number,
  y: number,
): HTMLElement | undefined {
  // Get all elements with the specified class within the container
  const elements = container.getElementsByClassName(className);
  if (elements.length === 0) return undefined;

  // Convert HTMLCollection to array and sort by distance to click point
  return Array.from(elements).sort((a, b) => {
    const rectA = a.getBoundingClientRect();
    const rectB = b.getBoundingClientRect();

    const distanceA = Math.hypot(
      x - (rectA.left + rectA.width / 2),
      y - (rectA.top + rectA.height / 2),
    );
    const distanceB = Math.hypot(
      x - (rectB.left + rectB.width / 2),
      y - (rectB.top + rectB.height / 2),
    );

    return distanceA - distanceB;
  })[0] as HTMLElement;
}
