import { getFileConfig } from "./file/config.ts";
import { pascalCase } from "./file/name.ts";

interface WriteExportsOptions {
  outputDir: string;
  files: string[];
}

export const writeExports = (
  { outputDir, files }: WriteExportsOptions,
) => {
  console.log(`\n\n> Writing ${files.length} exports to ${outputDir}/mod.ts`);

  const content = files.map((file) => {
    const fileConfig = getFileConfig(file);
    const typeName = pascalCase(fileConfig.name);

    return `export type { ${typeName} } from "./${fileConfig.name}.${fileConfig.extension}";`;
  }).join(
    "\n",
  );

  console.log(`<<\n ${content} \n>>`);

  console.log(`\n\n> Writing ${content.length} exports to ${outputDir}/mod.ts`);

  const encoder = new TextEncoder();
  const outputFilepath = `${outputDir}/mod.ts`;

  Deno.writeFileSync(
    outputFilepath,
    encoder.encode(content),
  );
};
