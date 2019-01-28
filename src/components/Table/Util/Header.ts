import { TextAlignment } from './TextAlignment';
import { shortUuid } from '@/lib';
import { VNode, CreateElement } from 'vue';

export type HeaderCellRenderFunction = (h: CreateElement, context: any) => VNode;
export interface Header {
  label: string;
  sortable: boolean;
  sortBy: string | null;
  alignment: TextAlignment;
  columnFixed: boolean;
  renderHeader?: HeaderCellRenderFunction;
}

export type RawHeader = {
  label: string;
  sortable?: boolean;
  sortBy?: string;
  alignment?: TextAlignment;
  renderHeader?: HeaderCellRenderFunction;
} | string;

export interface NormalizedHeader extends Header {
  id: string;
}

export const normalizedHeader = (raw: RawHeader, columnFixed: boolean): NormalizedHeader => {
  const headerObject = typeof raw === 'string' ? { label: raw } : raw;
  const {
    label,
    sortBy = null,
    sortable = false,
    alignment = TextAlignment.default,
    renderHeader,
  } = headerObject;
  const id = shortUuid();
  return {
    id,
    sortBy,
    sortable,
    label,
    alignment,
    columnFixed,
    renderHeader,
  };
};

export const normalizedHeaders = (
  raw: RawHeader[],
  firstColumnFixed: boolean,
): NormalizedHeader[] => {
  return raw.map((header, index) => {
    const columnFixed = firstColumnFixed && index === 0;
    return normalizedHeader(header, columnFixed);
  });
};
