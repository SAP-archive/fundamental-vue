import { Vue } from 'vue/types/vue';

export interface ButtonContainer {
  readonly compact: boolean;
  didClickButton(button: Vue): void;
  isButtonPressed(button: Vue): boolean;
}
