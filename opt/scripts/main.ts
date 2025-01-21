import chalk from "npm:chalk";
import figlet from "npm:figlet";
import { generateTypes } from "./src/actions/generate.ts";

console.log(
  chalk.bold.yellow(
    figlet.textSync("Types Generator", { font: "Larry 3D" }),
  ),
);

await generateTypes({
  inputDir: "data/imports",
  dataDir: "data/json",
  schemaDir: "data/schemas",
  fileExtension: "xls",
});
