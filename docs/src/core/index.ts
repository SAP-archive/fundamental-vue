import Vue from "vue";

// Re-exporting for convenience
export { Vue };

// tslint:disable-next-line:no-console
export const log = (message?: any, ...params: any[]): void =>
  console.log(message, ...params);
// tslint:disable-next-line:no-console
export const warn = (message?: any, ...params: any[]): void =>
  console.warn(message, ...params);
