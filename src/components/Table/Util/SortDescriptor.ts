import { SortOrder } from './SortOrder';

export type SortDescriptor = {
  columnId: string;
  prop: string;
  order: SortOrder;
} & object;
