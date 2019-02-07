// Credits: https://github.com/ktsn/vue-typed-mixins
// License: MIT
// Thanks: katashin | https://katashin.info | https://github.com/ktsn

import Vue, { VueConstructor } from 'vue';

export type VueClass<T> = VueConstructor<T & Vue>;

export default function mixins<A>(Ctor1: VueClass<A>): VueClass<A>;
export default function mixins<A, B>(
  Ctor1: VueClass<A>,
  Ctor2: VueClass<B>,
): VueClass<A & B>;
export default function mixins<A, B, C>(
  Ctor1: VueClass<A>,
  Ctor2: VueClass<B>,
  Ctor3: VueClass<C>,
): VueClass<A & B & C>;
export default function mixins<A, B, C, D>(
  Ctor1: VueClass<A>,
  Ctor2: VueClass<B>,
  Ctor3: VueClass<C>,
  Ctor4: VueClass<D>,
): VueClass<A & B & C & D>;
export default function mixins<A, B, C, D, E>(
  Ctor1: VueClass<A>,
  Ctor2: VueClass<B>,
  Ctor3: VueClass<C>,
  Ctor4: VueClass<D>,
  Ctor5: VueClass<E>,
): VueClass<A & B & C & D & E>;
export default function mixins<A, B, C, D, E, F>(
  Ctor1: VueClass<A>,
  Ctor2: VueClass<B>,
  Ctor3: VueClass<C>,
  Ctor4: VueClass<D>,
  Ctor5: VueClass<E>,
  Ctor6: VueClass<F>,
): VueClass<A & B & C & D & E & F>;
export default function mixins<A, B, C, D, E, F, G>(
  Ctor1: VueClass<A>,
  Ctor2: VueClass<B>,
  Ctor3: VueClass<C>,
  Ctor4: VueClass<D>,
  Ctor5: VueClass<E>,
  Ctor6: VueClass<F>,
  Ctor7: VueClass<G>,
): VueClass<A & B & C & D & E & F & G>;
export default function mixins<A, B, C, D, E, F, G, H>(
  Ctor1: VueClass<A>,
  Ctor2: VueClass<B>,
  Ctor3: VueClass<C>,
  Ctor4: VueClass<D>,
  Ctor5: VueClass<E>,
  Ctor6: VueClass<F>,
  Ctor7: VueClass<G>,
  Ctor8: VueClass<H>,
): VueClass<A & B & C & D & E & F & G & H>;
export default function mixins<A, B, C, D, E, F, G, H, I>(
  Ctor1: VueClass<A>,
  Ctor2: VueClass<B>,
  Ctor3: VueClass<C>,
  Ctor4: VueClass<D>,
  Ctor5: VueClass<E>,
  Ctor6: VueClass<F>,
  Ctor7: VueClass<G>,
  Ctor8: VueClass<H>,
  Ctor9: VueClass<I>,
): VueClass<A & B & C & D & E & F & G & H & I>;
export default function mixins(...Ctors: VueConstructor[]): VueConstructor {
  return Vue.extend({ mixins: Ctors });
}
