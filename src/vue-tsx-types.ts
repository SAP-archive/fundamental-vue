import { VNodeData } from 'vue';

// KnownAttrs inspired by wonderful-panda
// MIT License
// Copyright (c) 2017 wonderful-panda
// Full License: https://github.com/wonderful-panda/vue-tsx-support/blob/master/LICENSE
// GitHub Project: https://github.com/wonderful-panda/vue-tsx-support
// Thanks!
type KnownAttributeName = 'class' | 'staticClass' | 'key' | 'ref' | 'slot' | 'scopedSlots';
type KnownAttrs = Pick<VNodeData, KnownAttributeName> & {
  style?: VNodeData['style'] | string;
  id?: string;
  refInFor?: boolean;
  domPropsInnerHTML?: string;
};

export type ComponentProps<P> =
  & Readonly<{}>
  & Readonly<P>
  & Readonly<KnownAttrs>
  ;
