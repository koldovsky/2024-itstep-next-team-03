export type ManufacturerData = {
  manufacturer: string;
  count: string;
};

export const transformManufacturers = (data: ManufacturerData[]) => {
  return data.map(({ manufacturer, count }) => ({
    label: manufacturer,
    amount: parseInt(count, 10),
  }));
};
