import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-totalizacao',
  templateUrl: './totalizacao.component.html',
  styleUrls: ['./totalizacao.component.scss']
})
export class TotalizacaoComponent implements OnInit {

  @Input()
  titulo: string;

  @Input()
  valor: string;

  constructor() { }

  ngOnInit(): void {
  }

}
