import { shortUuid } from "./../../../lib";

const normalizeItem = raw => {
  const id = raw.id || shortUuid();
  const children = raw.children || [];
  const to = raw.to || "#";
  return {
    ...raw,
    id,
    children,
    to
  };
};

export const normalizeItems = items => items.map(normalizeItem);
