import { colors } from 'jsr:@cliffy/ansi@1.0.0-rc.8/colors';
import figlet from 'npm:figlet';
import { transformFile } from './file.ts';
import { TransformOptions } from './types.ts';

export const transformAction = async (
  options: TransformOptions,
  source: string,
) => {
  console.log(
    "transform command called for '%s' with options: %o",
    source,
    options,
  );
  console.log(
    colors.bold.yellow(
      figlet.textSync('Transform data', { font: 'Larry 3D' }),
    ),
  );

  const stat = await Deno.stat(source);

  if (stat.isDirectory) {
    console.log(colors.red('Directory transformation is not supported yet.'));
  } else {
    await transformFile(source, options);
  }
};
