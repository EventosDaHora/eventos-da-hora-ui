import {Component, OnInit} from '@angular/core';
import {Cliente} from '../../../../../dominio/Cliente';

@Component({
  selector: 'app-criar-conta',
  templateUrl: './criar-conta.component.html',
  styleUrls: ['./criar-conta.component.scss']
})
export class CriarContaComponent implements OnInit {

  pais: string;
  paises: any[];

  cliente: Cliente;

  constructor() {
    this.paises = ['New York', 'Rome', 'London', 'Istanbul', 'Paris'];
    this.cliente = {
      nome: '',
      email: '',
      pais: '',
      celular: '',
      login: {
        usuario: '',
        senha: ''
      }
    };
  }

  ngOnInit(): void {
  }

}
