import { ModeType } from './Mode';

export class Config {
  // static KEY = Symbol();

  constructor(readonly mode: ModeType = 'manual') {}
}
