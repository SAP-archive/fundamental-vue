import { shortUuid } from "@/lib";

export interface Item {
  id: string;
  to: string | object; // correct type: VueRouter.RawLocation;
  children: Item[];
  name?: string;
  icon?: string;
}

export interface RawItem {
  id?: string;
  to?: string | object; // correct type: VueRouter.RawLocation;
  children?: Item[];
  name?: string;
  icon?: string;
}

const normalizeItem = (raw: RawItem): Item => {
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

export const normalizeItems = (items: RawItem[]) => items.map(normalizeItem);
