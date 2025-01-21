import chalk from "npm:chalk";
import figlet from "npm:figlet";
import { generate } from "./src/actions/mod.ts";

console.log(
  chalk.bold.yellow(
    figlet.textSync("Types Generator", { font: "Larry 3D" }),
  ),
);

await generate({
  inputDir: "data/imports",
  dataDir: "data/json",
  schemaDir: "data/schemas",
  fileExtension: "xls",
});
