import type { LexicalEditor } from "lexical";
import { useEffect } from "react";
import { registerDefaultPerfHandlers } from "shared";

export function usePerfHandlers(editor: LexicalEditor): void {
  return useEffect(() => {
    return registerDefaultPerfHandlers(editor);
  }, [editor]);
}
