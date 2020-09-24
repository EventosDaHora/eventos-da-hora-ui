import {Apierror} from './apierror';

export class WrapperApierror {
    apierror: Apierror;
    status: number;


  constructor() {
    this.apierror = new Apierror();
  }
}
