import { Api } from './Api';

export class ApiCollection {
  constructor(readonly apis: Api[] = []) { }
  public add(api: Api) {
    this.apis.push(api);
  }
}
