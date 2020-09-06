import {Evento} from './Evento';
import {Cliente} from './Cliente';

export interface Carrinho {
  eventos: Evento[];
  cliente: Cliente;
}
