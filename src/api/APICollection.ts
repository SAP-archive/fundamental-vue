import { API } from './API';

export class APICollection {
  constructor(readonly apis: API[] = []) { }
  public add(api: API) {
    this.apis.push(api);
  }
}
