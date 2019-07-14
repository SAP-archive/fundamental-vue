import { TextAlignment } from "./text-alignment";
import { shortUuid } from "./../../../lib";

export const normalizedHeader = (raw, columnFixed) => {
  const headerObject = typeof raw === "string" ? { id: raw, label: raw } : raw;
  const {
    label,
    sortBy = null,
    sortable = false,
    alignment = TextAlignment.default,
    renderHeader,
    id = shortUuid()
  } = headerObject;
  return {
    id,
    sortBy,
    sortable,
    label,
    slotName: id,
    alignment,
    columnFixed,
    renderHeader
  };
};

export default (raw, firstColumnFixed) => {
  return raw.map((header, index) => {
    const columnFixed = firstColumnFixed && index === 0;
    return normalizedHeader(header, columnFixed);
  });
};
