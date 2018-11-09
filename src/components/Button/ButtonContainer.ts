import { Button } from './button';

export interface ButtonContainer {
  readonly compact: boolean;
  didClickButton(button: Button): void;
  isButtonPressed(button: Button): boolean;
}
