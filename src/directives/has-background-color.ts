import { DirectiveFunction } from 'vue';
import { Color, backgroundColorClassName, isColor } from '@/lib';

export type BackgroundColor = Color;

export const hasBackgroundColor: DirectiveFunction = ({ classList }, binding) => {
  const newColorName = binding.arg || binding.value;
  if (isColor(newColorName)) {
    const colorClass = backgroundColorClassName(newColorName);
    if (!classList.contains(colorClass)) {
      classList.add(colorClass);
    }
  }
};
