import { GetMarkerAction, ScriptureReference } from "shared";
import useUsfmMakersForMenu from "@/hooks/useUsfmMarkersForMenu";
import NodesMenu from "@/components/NodesMenu/NodesMenu";

export default function UsfmNodesMenuPlugin({
  trigger,
  scriptureReference,
  contextMarker,
  getMarkerAction,
  autoNumbering,
}: {
  trigger: string;
  scriptureReference: ScriptureReference;
  contextMarker: string | undefined;
  getMarkerAction: GetMarkerAction;
  autoNumbering?: boolean;
}) {
  const { markersMenuItems } = useUsfmMakersForMenu({
    scriptureReference,
    contextMarker,
    getMarkerAction,
    autoNumbering,
  });

  return <NodesMenu trigger={trigger} items={markersMenuItems} autoNumbering={autoNumbering} />;
}
