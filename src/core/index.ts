import Vue from 'vue';
export * from '@/api/Decorators';

// Re-exporting for convenience
export { Vue };
export { TsxComponent as Base } from '@/vue-tsx';
export { ComponentProps } from '@/vue-tsx-types';

// tslint:disable-next-line:no-console
export const log = (message?: any, ...params: any[]): void => console.log(message, ...params);
// tslint:disable-next-line:no-console
export const warn = (message?: any, ...params: any[]): void => console.warn(message, ...params);
