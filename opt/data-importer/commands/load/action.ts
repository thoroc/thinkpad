import { colors } from "jsr:@cliffy/ansi@1.0.0-rc.8/colors";
import figlet from "npm:figlet";

interface LoadActionOptions {
  output?: string;
}

export const loadAction = (options: LoadActionOptions, source: string) => {
  console.log(
    colors.bold.yellow(
      figlet.textSync("Load data", { font: "Larry 3D" }),
    ),
  );

  console.log(
    "load command called for '%s' with options: %o",
    source,
    options,
  );
};
