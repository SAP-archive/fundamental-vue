import { RawLocation } from 'vue-router';

export interface Item {
  id: string;
  to?: RawLocation;
  name?: string;
  icon?: string;
  children?: Item[];
}
