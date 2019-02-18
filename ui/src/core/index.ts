import Vue from "vue";

// Re-exporting for convenience
export { Vue };

export const log = (message?: any, ...params: any[]) =>
  console.log(message, ...params); // eslint-disable-line no-console
export const warn = (message?: any, ...params: any[]) =>
  console.warn(message, ...params); // eslint-disable-line no-console
