import { Command } from "jsr:@cliffy/command@^1.0.0-rc.7";

interface TransformCommandOptions {
  output?: string;
}

export const transformCommand = new Command()
  .arguments("<source:string>")
  .description("Transform a raw json file into a clean data json file.")
  .option("-o, --output <output:string>", "Output path.")
  .action((options: TransformCommandOptions, source: string) => {
    console.log(
      "transform command called for %s with options: %o",
      source,
      options,
    );
  });
