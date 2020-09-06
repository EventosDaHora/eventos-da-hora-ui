import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-filtro-evento',
  templateUrl: './filtro-evento.component.html',
  styleUrls: ['./filtro-evento.component.scss']
})
export class FiltroEventoComponent implements OnInit {

  dataInicial: Date;

  dataFinal: Date;

  filtros: any[] = [];

  constructor() { }

  ngOnInit(): void {
    const paises = ['Estados Unidos', 'Itália', 'Reino Unido', 'Turquia', 'França',
      'Estados Unidos', 'Itália', 'Reino Unido', 'Turquia', 'França'];
    const cidades = ['New York', 'Rome', 'London', 'Istanbul', 'Paris'];
    const artistas = ['Amado Batista', 'Gretchen', 'Xitao E Xororo', 'Calcinha Preta', 'Guns and Roses'];

    this.filtros = [
      {mostrarConteudo: false, categoria: 'Data'},
      {mostrarConteudo: false, categoria: 'País', conteudoCheckbox: paises},
      {mostrarConteudo: false, categoria: 'Cidade', conteudoCheckbox: cidades},
      {mostrarConteudo: false, categoria: 'Artista', conteudoCheckbox: artistas},
      {mostrarConteudo: false, categoria: 'Preço'}
    ];
  }

  toggle(filtro: any) {
    this.filtros
      .filter(filter => filter.categoria !== filtro.categoria)
      .forEach(filter => filter.mostrarConteudo = false);
    filtro.mostrarConteudo = !filtro.mostrarConteudo;
  }

}
