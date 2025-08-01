import { Command } from "jsr:@cliffy/command@1.0.0-rc.8";
import { checkDataShapeAction } from "./action.ts";

// Script to find all the possible values for the properties in the extracted JSON files
// This script reads all JSON files in the ./data/extracted directory and collects unique values for
// each property across all files. It then prints the property name, the files it appears in,
// and the unique values found for that property.

// list all JSON files

const cli = new Command()
  .name("check-data-shape")
  .description("Check the shape of data in extracted JSON files")
  .option(
    "-i, --input-path <inputPath:string>",
    "Path to the directory containing JSON files",
    {
      default: `${Deno.cwd()}/data/extracted`,
    },
  )
  .option(
    "-s, --selected-properties <selectedProperties:string>",
    "The properties to output",
    {
      default: "all",
      collect: true,
    },
  )
  .option("-l, --list", "List all property names")
  .option("-g, --grouped", "Group the properties")
  .action(checkDataShapeAction);

if (import.meta.main) {
  cli.parse(Deno.args);
}
