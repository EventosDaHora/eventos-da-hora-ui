import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-descricao-evento',
  templateUrl: './descricao-evento.component.html',
  styleUrls: ['./descricao-evento.component.scss']
})
export class DescricaoEventoComponent implements OnInit {

  @Input()
  cabecalho: string;

  constructor() { }

  ngOnInit(): void {
  }

}
