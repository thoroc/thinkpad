export interface Warranty {
  basePeriod?: string; // e.g., "1 year"
  location: string; // e.g., "Onsite", "Depot"
  extended?: { period: string; description: string }; // e.g., with 2-year System Board, with 3-year Battery
  internationalDelivery?: boolean; // e.g., "International Delivery"
}

export const toWarranty = (warrantyString: string): Warranty => {
  const warranty = {} as Warranty;

  // Match base period and location (dash, comma, or whitespace as separator)
  const basePattern =
    /^(?<basePeriod>[\d\w\-]+)[\s,-]+(?<where>Mail-in|Depot|Onsite)/i;
  const baseMatch = basePattern.exec(warrantyString);

  if (baseMatch?.groups) {
    warranty.basePeriod = baseMatch.groups.basePeriod.trim();
    warranty.location = baseMatch.groups.where.trim();
  }

  // Match extended warranty details
  const extendedPattern =
    /with\s+(?<extendedPeriod>[\d\w\-]+)\s+(?<extendedDescription>.+)/i;
  const extendedMatch = extendedPattern.exec(warrantyString);

  if (extendedMatch?.groups) {
    warranty.extended = {
      period: extendedMatch.groups.extendedPeriod.trim(),
      description: extendedMatch.groups.extendedDescription.trim(),
    };
  }

  // Check for international delivery
  if (/International Delivery|OID/i.test(warrantyString)) {
    warranty.internationalDelivery = true;
  }

  return warranty;
};
