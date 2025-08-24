// Reaching inside only for app css.
// eslint-disable-next-line @nx/enforce-module-boundaries
import "../../shared/src/styles/perf-app.css";
// eslint-disable-next-line @nx/enforce-module-boundaries
import "../../shared/src/styles/nodes-menu.css";
import Editor from "./app/Editor";

function App() {
  return (
    <div className="editors">
      <div className="editor">
        <Editor
          {...{
            serverName: "dbl",
            organizationId: "bfbs",
            languageCode: "fra",
            versionId: "lsg",
            bookCode: "rev",
          }}
        />
      </div>
    </div>
  );
}

export default App;
