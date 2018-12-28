export const Mode = { router: 'router', manual: 'manual' };
export type ModeType = keyof typeof Mode;
export const Modes = Object.keys(Mode) as ModeType[];
