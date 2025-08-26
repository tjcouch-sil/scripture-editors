/**
 * Inspired by code in @see https://github.com/facebook/lexical/
 */

import type { LexicalEditor, UpdateListener } from "lexical";

import { registerOnChange } from ".";
import { useEffect } from "react";

export function useOnChange(editor: LexicalEditor, onChange: UpdateListener): void {
  useEffect(() => {
    return registerOnChange(editor, onChange);
  }, [onChange, editor]);
}
