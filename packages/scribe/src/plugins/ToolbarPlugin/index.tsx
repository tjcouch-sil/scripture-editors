import { EditButtons } from "./EditButtons";
import { InsertButtons } from "./InsertButtons";

export default function ToolbarPlugin() {
  return (
    <div className="sticky top-0 flex w-full items-center justify-between border-b border-gray-200 bg-secondary px-2 py-1 text-white">
      <EditButtons />
      <InsertButtons />
    </div>
  );
}
