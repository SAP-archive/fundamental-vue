import { shortUuid } from '@/lib';

// A raw item is just an object. Nothing else.
export type RawItem = object;
// A normalized item is simply a RawItem with an id.
export type Item = { id: string; } & RawItem;
export type TableItems = Item[];

export const normalizeItems = (rawItems: RawItem[]): TableItems => {
  return rawItems.map(raw => {
    // @ts-ignore
    const id = raw.hasOwnProperty('id') ? raw.id : shortUuid();
    return {id, ...raw};
  });
};
