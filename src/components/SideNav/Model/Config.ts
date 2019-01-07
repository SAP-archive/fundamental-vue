import { ModeType } from './Mode';

export class Config {
  public static KEY = Symbol();

  constructor(public readonly mode: ModeType = 'manual') {}
}
