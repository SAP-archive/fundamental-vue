// Time type
const typeMapping = {
  hour24: "hour24",
  hour12: "hour12",
  minute: "minute",
  second: "second",
  meridian: "meridian"
};
export const TimeTypeList = Object.keys(typeMapping);
export const isTimeType = value => TimeTypeList.indexOf(value) >= 0;
