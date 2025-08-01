export interface Camera {
  resolution?: string;
  '3D'?: boolean;
  worldFacing?: boolean;
  infrared?: boolean;
  thinkShutter?: boolean;
}

/**
 * Parses a camera description string and returns a `Camera` object with extracted properties.
 *
 * The function analyzes the input string to determine camera features such as infrared capability,
 * 3D support, world-facing orientation, ThinkShutter presence, and resolution (in MP or p).
 *
 * @param cameraString - The string describing the camera configuration.
 * @returns A `Camera` object with properties set according to the parsed string.
 */
export const toCamera = (cameraString: string): Camera => {
  const camera = {} as Camera;

  if (cameraString === 'None') {
    return camera;
  }

  if (cameraString.match('IR')) {
    camera.infrared = true;
  }

  if (cameraString.includes('3D')) {
    camera['3D'] = true;
  }

  if (cameraString.includes('World Facing')) {
    camera.worldFacing = true;
  }

  const thinkShutterPattern = /(?<thinkShutter>with|without)\s*ThinkShutter/i;
  const thinkShutterMatch = cameraString.match(thinkShutterPattern);

  if (thinkShutterMatch?.groups?.thinkShutter) {
    camera.thinkShutter = thinkShutterMatch?.groups?.thinkShutter.toLowerCase() === 'with';
  }

  const resolutionPattern = /(\d+\.?\d*)\s*MP|(\d+)\s*p/;
  const resolutionMatch = cameraString.match(resolutionPattern);

  if (resolutionMatch) {
    if (resolutionMatch[1]) {
      camera.resolution = `${resolutionMatch[1]}MP`;
    } else if (resolutionMatch[2]) {
      camera.resolution = `${resolutionMatch[2]}p`;
    }
  }

  return camera;
};
