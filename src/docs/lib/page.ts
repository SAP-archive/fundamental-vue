export interface Page {
  key: string;
  parentDirs: string[];
  filename: string;
  component(): Promise<PageModule>
}

export interface PageCollection {
  key: string;
  parentDirs: string[];
  filename: string;
  component(): Promise<PageModule>
  pages: Page[];
}


export interface PageModule {
  default: any
}

export type PageLoader = () => Promise<PageModule>
export type PagesLoader = (key: string) => Promise<PageModule>
