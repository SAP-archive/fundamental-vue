const {
  VUE_APP_FD_VUE_DEV_TOOLS,
  VUE_APP_FD_NAME,
  VUE_APP_VERSION,
  NODE_ENV,
  VUE_APP_API_DOCS_ENABLED,
} = process.env;

export const devToolsEnabled = VUE_APP_FD_VUE_DEV_TOOLS === 'enabled';
export const libName = (VUE_APP_FD_NAME as string) || '<name not set>';
export const version = VUE_APP_VERSION as string;
export const env = (NODE_ENV as string) || 'production';
export const apiDocsEnabled = VUE_APP_API_DOCS_ENABLED === 'true';
