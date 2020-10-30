import {Component, HostListener, Input, OnInit} from '@angular/core';
import {Event} from 'src/app/dominio/Event';
import {FiltroEvento} from '../../../../dominio/enums/FiltroEvento';
import {Router} from '@angular/router';
import {ResolucaoDispositivoService} from '../../../../services/resolucao-dispositivo.service';
import {EventoService} from "../../../../services/evento/evento.service";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  @Input()
  event: Event;

  @Input()
  mostrarBusca ? = false;

  isMobile = true;

  local = FiltroEvento.local;
  pais = FiltroEvento.pais;
  cidade = FiltroEvento.cidade;
  nome = FiltroEvento.nome;

  constructor(private router: Router,
              private resolucao: ResolucaoDispositivoService,
              private eventService: EventoService) {
  }

  ngOnInit(): void {
    this.eventService.getById(1).subscribe(response => {
      this.event = response as Event;
    })
    this.tamanhoDaTela();
  }

  @HostListener('window:resize', ['$event'])
  @HostListener('window:load', ['$event'])
  tamanhoDaTela() {
    this.isMobile = this.resolucao.tamanhoDaTela();
  }

  navigateToCategoria(filtroEvento: FiltroEvento, evento: Event) {
    this.router.navigate(['eventos-categoria'],
      {
        state: {
          filtro: {filtroEvento, evento}
        }
      });
  }
}
