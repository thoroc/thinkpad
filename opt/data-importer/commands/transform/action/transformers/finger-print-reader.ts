export interface FingerprintReader {
  enabled: boolean;
  type?: string;
}

export const toFingerprintReader = (
  fingerprintReaderString: string,
): FingerprintReader => {
  const fingerprintReader: FingerprintReader = { enabled: false };

  if (fingerprintReaderString === 'Fingerprint Reader') {
    fingerprintReader.enabled = true;

    return fingerprintReader;
  }

  if (
    fingerprintReaderString !== 'None' &&
    fingerprintReaderString !== 'Fingerprint Reader'
  ) {
    fingerprintReader.enabled = true;
    fingerprintReader.type = fingerprintReaderString.trim();
  }

  return fingerprintReader;
};
