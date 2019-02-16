import Vue from "vue";

// Re-exporting for convenience
export { Vue };

// eslint:disable-next-line:no-console
export const log = (message?: any, ...params: any[]): void =>
  console.log(message, ...params);
// eslint:disable-next-line:no-console
export const warn = (message?: any, ...params: any[]): void =>
  console.warn(message, ...params);
