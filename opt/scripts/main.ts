import { generateTypes } from "./src/generate.ts";

await generateTypes({
  inputDir: "data/imports",
  dataDir: "data/json",
  schemaDir: "data/schemas",
  fileExtension: "xls",
  maxFiles: -1,
});
