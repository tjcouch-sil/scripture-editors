import { getUsfmMarkerAction, ScriptureReference } from "shared";
import UsfmNodesMenuPlugin from "./UsfmNodesMenuPlugin";

export function PerfNodesMenuPlugin({
  trigger,
  scriptureReference,
  contextMarker,
}: {
  trigger: string;
  scriptureReference: ScriptureReference;
  contextMarker: string;
}) {
  return (
    <UsfmNodesMenuPlugin
      trigger={trigger}
      scriptureReference={scriptureReference}
      contextMarker={contextMarker}
      getMarkerAction={getUsfmMarkerAction}
    />
  );
}
