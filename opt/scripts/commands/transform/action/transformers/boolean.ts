import { pascalCase } from 'npm:string-ts';
import type { Transformed } from './types.ts';
import { TransformerOptions } from './types.ts';

export const transformToBoolean = (
  { Key, Value }: TransformerOptions,
): Transformed => {
  if (typeof Value === 'boolean') {
    return { [Key]: Value };
  }

  if (
    Value.toUpperCase() === 'YES' ||
    pascalCase(Key) === pascalCase(Value)
  ) {
    return { [Key]: true };
  }

  const negativeValues = ['NO', 'NONE'];

  if (negativeValues.includes(Value.toUpperCase())) {
    return { [Key]: false };
  }

  return { [Key]: Value };
};
