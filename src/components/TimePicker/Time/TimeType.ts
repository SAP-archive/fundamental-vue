// Time type
const typeMapping = {
  hour24: 'hour24',
  hour12: 'hour12',
  minute: 'minute',
  second: 'second',
  meridian: 'meridian',
};
export type TimeType = keyof (typeof typeMapping);
export const TimeTypeList = Object.keys(typeMapping) as TimeType[];
export const isTimeType = (value: any) => TimeTypeList.indexOf(value) >= 0;
