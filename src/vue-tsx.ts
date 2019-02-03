import Vue from 'vue';
import { ComponentProps } from './vue-tsx-types';

export abstract class TsxComponent<P = {}> extends Vue {
  $tsxProps!: ComponentProps<P>;
}
