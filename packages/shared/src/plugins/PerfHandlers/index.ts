import { LexicalEditor } from "lexical";
import { registerFocusableGrafts } from "./registerFocusableGrafts.js";

export function registerDefaultPerfHandlers(editor: LexicalEditor) {
  registerFocusableGrafts(editor);
}
