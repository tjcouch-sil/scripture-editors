import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { UpdateListener } from "lexical";
import { useEffect } from "react";

//Small plugin for testing update related plugins,
//it is intended to be used temporarily inside the LexicalComposer to test new plugin ideas.
export default function OnEditorUpdate({ updateListener }: { updateListener: UpdateListener }) {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    editor.registerUpdateListener(updateListener);
  }, [updateListener, editor]);
  return null;
}
