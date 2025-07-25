import { colors } from "jsr:@cliffy/ansi@1.0.0-rc.8/colors";
import {
  exportSheet,
  ExportTypes,
  importSheet,
  ImportTypes,
} from "jsr:@psych/sheet";
import { exists } from "jsr:@std/fs/exists";
import { resolve } from "jsr:@std/path";
import { getFileConfig } from "../file/config.ts";
import { ExportFileExtension } from "../types.ts";

interface ConvertXlsOptions {
  filepath: string;
  outputDir: string;
  exports: { fileExtension: ExportFileExtension };
  overwrite?: boolean;
}

export const convertXls = async (
  { filepath, outputDir, exports, overwrite }: ConvertXlsOptions,
) => {
  console.log(
    `Converting ${colors.green(filepath)} to ${
      colors.yellow(exports.fileExtension.toLocaleUpperCase())
    }`,
  );

  const filename = getFileConfig(filepath).name;
  const outputFilepath = `${outputDir}/${filename}.${exports.fileExtension}`;
  const fileExists = await exists(outputFilepath);

  if (!fileExists || overwrite) {
    const file = await Deno.readFile(filepath);
    const data = await importSheet(file.buffer, ImportTypes.XLS);

    await Deno.writeFile(
      resolve(outputDir, `${filename}.${exports.fileExtension}`),
      exportSheet(data, exports.fileExtension as ExportTypes),
    );
    console.log(
      `Converted ${colors.green(filepath)} to ${colors.green(outputFilepath)}`,
    );
  } else {
    console.log(
      `Skipping ${
        colors.green(filepath)
      }: File existing and will not be overwriten`,
    );
  }

  return outputFilepath;
};
