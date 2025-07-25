import { colors } from "jsr:@cliffy/ansi@1.0.0-rc.8/colors";
import figlet from "npm:figlet";
import { extractDirectory } from "./directory.ts";
import { extractFile } from "./file.ts";
import { ExtractOptions } from "./types.ts";

export const extractAction = async (
  options: ExtractOptions,
  source: string,
) => {
  console.debug(
    "extract command called for '%s' with options: %o",
    source,
    options,
  );
  console.log(
    colors.bold.yellow(
      figlet.textSync("Extract data", { font: "Larry 3D" }),
    ),
  );

  const stat = await Deno.stat(source);

  if (stat.isDirectory) {
    await extractDirectory(source, options);
  } else {
    await extractFile(source, options);
  }
};
