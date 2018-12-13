import { Button } from './Button';

export interface ButtonContainer {
  readonly compact: boolean;
  didClickButton(button: Button): void;
  isButtonPressed(button: Button): boolean;
}
