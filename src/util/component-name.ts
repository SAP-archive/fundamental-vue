const prefix = 'Fd';
export const componentName = (plain: string) => plain.startsWith(prefix) ? plain : `${prefix}${plain}`;
