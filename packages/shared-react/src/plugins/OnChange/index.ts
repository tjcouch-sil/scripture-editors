import { LexicalEditor, UpdateListener } from "lexical";

export const registerOnChange = (editor: LexicalEditor, onChange: UpdateListener) => {
  const handleChange: UpdateListener = ({
    editorState,
    dirtyElements,
    dirtyLeaves,
    prevEditorState,
    normalizedNodes,
    tags,
  }) => {
    onChange({
      editorState,
      dirtyElements,
      dirtyLeaves,
      prevEditorState,
      normalizedNodes,
      tags,
      mutatedNodes: null,
    });
  };

  return editor.registerUpdateListener(handleChange);
};
