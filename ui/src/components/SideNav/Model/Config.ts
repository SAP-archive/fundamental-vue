import { ModeType } from "./Mode";

export class Config {
  constructor(readonly mode: ModeType = "manual") {}
}
