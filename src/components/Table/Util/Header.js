import { TextAlignment } from "./TextAlignment";
import { shortUuid } from "./../../../lib";

export const normalizedHeader = (raw, columnFixed) => {
  const headerObject = typeof raw === "string" ? { label: raw } : raw;
  const {
    label,
    sortBy = null,
    sortable = false,
    alignment = TextAlignment.default,
    renderHeader
  } = headerObject;
  const id = shortUuid();
  return {
    id,
    sortBy,
    sortable,
    label,
    alignment,
    columnFixed,
    renderHeader
  };
};

export const normalizedHeaders = (raw, firstColumnFixed) => {
  return raw.map((header, index) => {
    const columnFixed = firstColumnFixed && index === 0;
    return normalizedHeader(header, columnFixed);
  });
};
