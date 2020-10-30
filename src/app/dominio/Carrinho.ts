import {Event} from './Event';
import {Cliente} from './Cliente';

export interface Carrinho {
  eventos: Event[];
  cliente: Cliente;
}
