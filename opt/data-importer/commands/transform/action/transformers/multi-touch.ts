import { NEGATIVE_VALUES, POSITIVE_VALUES, toBoolean } from './boolean.ts';

export const toMultiTouch = (
  multiTouchString: string,
): boolean | string => {
  const multiTouch = multiTouchString.toUpperCase();

  if ([...POSITIVE_VALUES, ...NEGATIVE_VALUES].includes(multiTouch)) {
    return toBoolean(multiTouch);
  }

  return multiTouch;
};
