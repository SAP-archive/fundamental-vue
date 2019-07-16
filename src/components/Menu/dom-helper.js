/** @param {HTMLElement} el */
export const getMenuItemLinkUidFromEl = el => el.getAttribute("data-fd-menu-item-link-uid");

/** @param {HTMLElement} el */
export const findMenuItemLink = el => el.querySelector("*[data-fd-menu-item-link-uid]");
