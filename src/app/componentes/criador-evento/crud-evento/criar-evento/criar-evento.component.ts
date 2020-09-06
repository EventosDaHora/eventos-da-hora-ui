import {Component, OnDestroy, OnInit} from '@angular/core';
import {Evento} from '../../../../dominio/Evento';
import {EventoService} from '../../../../services/evento/evento.service';
import {DialogService, DynamicDialogRef} from 'primeng';
import {EventoComponent} from '../../../cliente-final/negocio/checkout/evento/main/evento.component';
import {DynamicDialogConfig} from 'primeng/dynamicdialog/dynamicdialog-config';
import {ImagemEventoComponent} from './imagem-evento/imagem-evento.component';

@Component({
  selector: 'app-criar-evento',
  templateUrl: './criar-evento.component.html',
  styleUrls: ['./criar-evento.component.scss'],
  providers: [DialogService]
})
export class CriarEventoComponent implements OnInit, OnDestroy {

  evento: Evento;

  categorias: string[];

  ref: DynamicDialogRef;

  constructor(private eventoService: EventoService,
              public dialogService: DialogService) { }

  ngOnInit(): void {
    this.evento = this.eventoService.criaEventoVazio();
    this.categorias = this.eventoService.getCategorias();
  }

  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
  }

  mostrarPreview() {
    this.ref = this.dialogService.open(EventoComponent, {
      data: this.evento,
      header: 'Preview da página do evento',
      width: '80%',
      style: {'margin-top': '4em'},
      contentStyle: {'max-height': '800px', overflow: 'auto', 'background-color': '#151A30'},
      closeOnEscape: false
    });

    this.ref.onClose.subscribe(() => {
      console.log('Fechou');
    });
  }

  adicionarImagens() {
    this.ref = this.dialogService.open(ImagemEventoComponent, {
      data: this.evento,
      header: 'Adicionar Imagens',
      width: '80%',
      style: {'margin-top': '4em'},
      contentStyle: {'max-height': '800px', overflow: 'auto', 'background-color': '#151A30'},
      closeOnEscape: false
    });

    this.ref.onClose.subscribe(() => {
      console.log('Fechou');
    })
  }

}
