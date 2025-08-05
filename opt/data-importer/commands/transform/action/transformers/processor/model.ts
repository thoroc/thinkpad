export interface Model {
  vendor?: string;
  family: string;
  name?: string;
}

export const toModel = (modelString: string): Model => {
  const model = {} as Model;

  // Updated regex: vendor is optional, family and name are robust
  const modelMatch = modelString.match(
    /^(?:(?<vendor>AMD|Intel)\s+)?(?<family>Ryzen \d|Core i\d|Core|A\d{2}|A\d{1}|Celeron|Pentium|i\d|I\d)[ -]?(?<name>[A-Za-z0-9]+)$/i
  );

  if (modelMatch?.groups) {
    let { vendor, family, name } = modelMatch.groups;
    if (!vendor) {
      // Infer vendor from family
      if (/^Core( i\d)?$/i.test(family)) {
        vendor = 'Intel';
      } else if (/^Ryzen \d$/i.test(family) || /^A\d{1,2}$/i.test(family)) {
        vendor = 'AMD';
      } else if (/^Celeron|Pentium|i\d|I\d$/i.test(family)) {
        vendor = 'Intel';
      }
    }
    if (vendor) model.vendor = vendor.trim();
    model.family = family.trim();
    if (name) model.name = name.trim();
  }

  if (/^i\d{1}$/i.test(model.family)) {
    // Normalize family for Intel i-series
    model.family = `Core ${model.family.toLowerCase()}`;
  }

  return model;
};
