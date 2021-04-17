export const root = true;
export const env = {
  es6: true,
  node: true,
};
export const extends = [
  "eslint:recommended",
  "plugin:import/errors",
  "plugin:import/warnings",
  "google",
  "plugin:@typescript-eslint/recommended",
];
export const parser = "@typescript-eslint/parser";
export const parserOptions = {
  project: ["tsconfig.json", "tsconfig.dev.json"],
  sourceType: "module",
};
export const ignorePatterns = [
  "/lib/**/*", // Ignore built files.
];
export const plugins = ["@typescript-eslint", "import"];
export const rules = {
  quotes: ["error", "double"],
};
