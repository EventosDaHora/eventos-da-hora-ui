import {Injectable} from '@angular/core';

export const mobile = 900;

@Injectable({
  providedIn: 'root'
})
export class ResolucaoDispositivoService {

  constructor() { }

  public tamanhoDaTela() {
    return window.innerWidth < mobile;
  }
}
