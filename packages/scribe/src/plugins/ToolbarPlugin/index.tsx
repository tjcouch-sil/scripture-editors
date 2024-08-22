import { useCallback, useEffect, useState } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  CAN_UNDO_COMMAND,
  CAN_REDO_COMMAND,
  UNDO_COMMAND,
  REDO_COMMAND,
  COMMAND_PRIORITY_CRITICAL,
  LexicalEditor,
} from "lexical";
import { $getSelection } from "lexical";
import { $patchStyleText } from "@lexical/selection";
import { mergeRegister } from "@lexical/utils";

const FONT_FAMILY_OPTIONS = [
  ["Arial", "Arial"],
  ["Courier New", "Courier New"],
  ["Georgia", "Georgia"],
  ["Times New Roman", "Times New Roman"],
  ["Trebuchet MS", "Trebuchet MS"],
  ["Verdana", "Verdana"],
];

function FontDropDown({ editor, value }: { editor: LexicalEditor; value: string }) {
  const handleClick = useCallback(
    (option: string) => {
      editor.update(() => {
        const selection = $getSelection();
        if (selection) {
          $patchStyleText(selection, {
            "font-family": option,
          });
        }
      });
    },
    [editor],
  );

  return (
    <select
      className="toolbar-item font-family"
      value={value}
      onChange={(e) => handleClick(e.target.value)}
    >
      {FONT_FAMILY_OPTIONS.map(([option, text]) => (
        <option key={option} value={option}>
          {text}
        </option>
      ))}
    </select>
  );
}

export default function SimplifiedToolbar() {
  const [editor] = useLexicalComposerContext();
  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);
  const [isEditable] = useState(() => editor.isEditable());
  const [fontFamily] = useState("Arial");

  useEffect(() => {
    return mergeRegister(
      editor.registerCommand(
        CAN_UNDO_COMMAND,
        (payload) => {
          setCanUndo(payload);
          return false;
        },
        COMMAND_PRIORITY_CRITICAL,
      ),
      editor.registerCommand(
        CAN_REDO_COMMAND,
        (payload) => {
          setCanRedo(payload);
          return false;
        },
        COMMAND_PRIORITY_CRITICAL,
      ),
      // editor.registerUpdateListener(({ editorState }) => {
      //   editorState.read(() => {
      //     const selection = $getSelection();
      //     if ($INTERNAL_isPointSelection(selection)) {
      //       setFontFamily($getSelectionStyleValueForProperty(selection, "font-family", "Arial"));
      //     }
      //   });
      // }),
    );
  }, [editor]);

  return (
    <div className="toolbar">
      <button
        disabled={!canUndo}
        onClick={() => {
          editor.dispatchCommand(UNDO_COMMAND, undefined);
        }}
        title="Undo"
        type="button"
        className="toolbar-item spaced"
        aria-label="Undo"
      >
        Undo
      </button>
      <button
        disabled={!canRedo}
        onClick={() => {
          editor.dispatchCommand(REDO_COMMAND, undefined);
        }}
        title="Redo"
        type="button"
        className="toolbar-item"
        aria-label="Redo"
      >
        Redo
      </button>
      <button
        title="Read-Only Mode"
        type="button"
        className="toolbar-item"
        aria-label={`${!isEditable ? "Unlock" : "Lock"} read-only mode`}
        onClick={() => {
          editor.setEditable(!editor.isEditable());
        }}
      >
        Read-Only
      </button>
      <FontDropDown editor={editor} value={fontFamily} />
    </div>
  );
}
