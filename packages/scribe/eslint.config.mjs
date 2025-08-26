import nx from "@nx/eslint-plugin";
import reactRefreshPlugin from "eslint-plugin-react-refresh";
import baseConfig from "../../eslint.config.mjs";

export default [
  ...baseConfig,
  ...nx.configs["flat/react"],
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    plugins: { "react-refresh": reactRefreshPlugin },
    rules: {
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      // TODO: remove (or at least review) - added for nx config simplification.
      "@typescript-eslint/no-inferrable-types": "warn",
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    },
  },
];
