import { Page } from './../lib/page'
export interface LoadablePage extends Page {
  component(): Promise<{ default: any }>;
}
