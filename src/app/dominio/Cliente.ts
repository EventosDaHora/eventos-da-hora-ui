import {Login} from './Login';

export interface Cliente {
  nome: string;
  email: string;
  pais: string;
  celular: string;
  login: Login;
}
