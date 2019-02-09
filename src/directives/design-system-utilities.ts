import { directiveName } from '@/util';
import Vue from 'vue';

type Side = keyof {
  top: 'top',
  right: 'right',
  bottom: 'bottom',
  left: 'left',
};

const sizeMapping = {none: 'none', tiny: 'tiny', small: 'small', medium: 'medium', large: 'large'};
type Size = keyof typeof sizeMapping;
const Sizes = Object.keys(sizeMapping) as Size[];
const isSize = (value: any): value is Size | undefined => value === undefined || Sizes.includes(value);

type PaddingModifiers = {
  top?: boolean; left?: boolean; right?: boolean; bottom?: boolean;
};
type DesignClass = 'padding' | 'margin';

// Helper
const addClasses = (list: DOMTokenList, classes: string[]) => classes.forEach(cssClass => list.add(cssClass));

// Actual Design System Utils
const designClass = (prefix: DesignClass, size: Size, side?: Side) => side == null ? `fd-has-${prefix}-${size}` : `fd-has-${prefix}-${side}-${size}`;
const designClasses = (prefix: DesignClass, size: Size, modifiers: PaddingModifiers = {}): string[] => {
  const {top, left, right, bottom} = modifiers;
  if(top == null && left == null && right == null && bottom == null) {
    return [designClass(prefix, size)];
  }
  const classes: string[] = [];
  if(top === true) { classes.push(designClass(prefix, size, 'top')); }
  if(bottom === true) { classes.push(designClass(prefix, size, 'bottom')); }
  if(left === true) { classes.push(designClass(prefix, size, 'left')); }
  if(right === true) { classes.push(designClass(prefix, size, 'right')); }
  return classes;
};
export const paddingClasses = (size: Size, modifiers: PaddingModifiers = {}): string[] => designClasses('padding', size, modifiers);
const marginClasses = (size: Size, modifiers: PaddingModifiers = {}): string[] => designClasses('margin', size, modifiers);

/*
  Usage:
  v-padding:small
  v-padding:small.left.right.bottom
            ^---^ ^---------------^
             arg      modifiers
*/
export const padding = Vue.directive(directiveName('padding'), ({ classList }, binding) => {
  const { arg, modifiers } = binding;
  if(!isSize(arg)) { return; }
  const size = arg;
  addClasses(classList, paddingClasses(size || 'none', modifiers));
});

export const margin = Vue.directive(directiveName('margin'), ({ classList }, binding) => {
  const { arg, modifiers } = binding;
  if(!isSize(arg)) { return; }
  const size = arg;
  addClasses(classList, marginClasses(size || 'none', modifiers));
});

type FontWeight = 'light' | 'bold' | 'normal';
const isFontWeight = (value: any): value is FontWeight => value === 'light' || value === 'bold' || value === 'normal';
export const fontWeight = Vue.directive(directiveName('font-weight'), ({ classList }, binding) => {
  const { arg } = binding;
  if(!isFontWeight(arg)) { return; }
  addClasses(classList, [`fd-has-font-weight-${arg}`]);
});

type FontFamily = 'body' | 'header' | 'code';
const isFontFamily = (value: any): value is FontFamily => ['body', 'header', 'code'].includes(value);
export const fontFamily = Vue.directive(directiveName('font-family'), ({ classList }, binding) => {
  const { arg } = binding;
  if(!isFontFamily(arg)) { return; }
  addClasses(classList, [`fd-has-font-family-${arg}`]);
});

const typeMapping = { '-1': 'minus-1', '0': '0', '1': '1', '2': '2', '3': '3', '4': '4', '5': '5', '6': '6' };
type Type = keyof typeof typeMapping;
const Types = Object.keys(typeMapping) as Type[];
const isType = (value: any): value is Type => Types.includes(value);
export const type = Vue.directive(directiveName('type'), ({ classList }, binding) => {
  const { arg } = binding;
  if(!isType(arg)) { return 'fd-has-type'; }
  addClasses(classList, [`fd-has-type-${typeMapping[arg]}`]);
});
