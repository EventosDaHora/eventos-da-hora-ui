import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-indicador-filtro',
  templateUrl: './indicador-filtro.component.html',
  styleUrls: ['./indicador-filtro.component.scss']
})
export class IndicadorFiltroComponent implements OnInit, OnDestroy {

  @Input()
  filtroSubject: Subject<any>;

  constructor() { }

  ngOnInit(): void {
    this.filtroSubject.subscribe(event => {
    });
  }

  ngOnDestroy(): void {
    this.filtroSubject.unsubscribe();
  }

}
