export interface Camera {
  resolution: string;
  infrared?: boolean;
  thinkShutter?: boolean;
}

export const toCamera = (cameraString: string): Camera => {
  const camera = {} as Camera;

  if (cameraString === 'None') {
    return camera;
  }

  const pattern =
    /^(?<resolution>\d+p)(?:\s*\+\s*(?<infrared>IR))?(?:\s*(?<thinkShutter>with|without)\s*ThinkShutter)?$/;

  const match = cameraString.match(pattern);

  camera.infrared = false;
  camera.thinkShutter = false;

  if (match) {
    camera.resolution = match.groups?.resolution || 'Unknown';
    camera.infrared = match.groups?.infrared === 'IR';
    camera.thinkShutter = match.groups?.thinkShutter === 'with';
  }

  return camera;
};
