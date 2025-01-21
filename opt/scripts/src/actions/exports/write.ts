import { getFileConfig } from "../../file/config.ts";
import { getExportStatement } from "./get-statement.ts";

interface WriteExportsOptions {
  outputDir: string;
  files: string[];
  exports: {
    types: boolean;
    schemas?: boolean;
  };
}

export const writeExports = (
  { outputDir, files, exports }: WriteExportsOptions,
) => {
  console.log(`\n\n> Writing ${files.length} exports to ${outputDir}/mod.ts`);

  const content = files.map((file) => {
    const config = getFileConfig(file);

    return getExportStatement(config, exports.schemas || true);
  }).join("\n");

  console.debug(`<<\n${content}\n>>`);

  console.log(`\n\n> Writing ${content.length} exports to ${outputDir}/mod.ts`);

  const encoder = new TextEncoder();
  const outputFilepath = `${outputDir}/mod.ts`;

  Deno.writeFileSync(
    outputFilepath,
    encoder.encode(content),
  );
};
