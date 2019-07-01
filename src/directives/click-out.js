import { warn } from "./../core";

const HANDLER = "__fundamentalvue_clickout_handler__";

/** @type {import("vue").DirectiveFunction} */
const unbind = (el, { modifiers }) => {
  document.documentElement.removeEventListener("click", el[HANDLER], modifiers.capture);
  delete el[HANDLER];
};

/** @type {import("vue").DirectiveFunction} */
const bind = (el, binding, { context: vm }) => {
  unbind(el, binding);
  const { expression, name, modifiers, value: callback } = binding;

  if (typeof callback !== "function") {
    // eslint-disable-next-line no-undef
    if (process.env.NODE_ENV !== "production") {
      warn(`v-${name}=${expression} expects a function value, got ${callback}`);
    }
    return;
  }

  let initialMacrotaskEnded = false;
  setTimeout(() => (initialMacrotaskEnded = true));

  el[HANDLER] = ev => {
    const path = ev.path || (ev.composedPath ? ev.composedPath() : undefined);
    if (initialMacrotaskEnded && (path ? path.indexOf(el) < 0 : !el.contains(ev.target))) {
      if (modifiers.stop) {
        ev.stopPropagation();
      }
      return callback.call(vm, ev);
    }
  };

  document.documentElement.addEventListener("click", el[HANDLER], modifiers.capture);
};

export default {
  bind,
  unbind,
  update(el, binding, vnode) {
    if (binding.value === binding.oldValue) {
      return;
    }
    bind(el, binding, vnode);
  }
};

// Adopted from https://github.com/mrastiak/vue-clickout
// Below is the original license in order to give proper credits. Thanks man.
// The MIT License (MIT)
// Copyright (c) 2015 Denis Karabaza
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
