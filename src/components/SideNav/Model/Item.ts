export interface Item {
  id: string;
  to?: string | object; // correct type: VueRouter.RawLocation;
  name?: string;
  icon?: string;
  children?: Item[];
}
