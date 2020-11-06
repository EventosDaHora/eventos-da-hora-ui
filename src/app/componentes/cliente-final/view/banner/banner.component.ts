import {Component, HostListener, Input, OnInit} from '@angular/core';
// @ts-ignore
import {Event} from 'src/app/dominio/Event';
import {FiltroEvento} from '../../../../dominio/enums/FiltroEvento';
import {ActivatedRoute, Router} from '@angular/router';
import {ResolucaoDispositivoService} from '../../../../services/resolucao-dispositivo.service';
import {EventoService} from "../../../../services/evento/evento.service";
import {ImageEvent} from "../../../../dominio/ImageEvent";
import {environment} from "../../../../../environments/environment";

@Component({
    selector: 'app-banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.scss']
})
// @ts-ignore
export class BannerComponent implements OnInit {

    @Input()
        // @ts-ignore
    event: Event;

    @Input()
        // @ts-ignore
    mostrarBusca ? = false;

    isMobile = true;

    local = FiltroEvento.local;
    pais = FiltroEvento.pais;
    cidade = FiltroEvento.cidade;
    nome = FiltroEvento.nome;
    apiImageURL = `${environment.apiUrl}/eventos-da-hora-image-api`;

    constructor(private router: Router,
                private resolucao: ResolucaoDispositivoService,
                private eventService: EventoService,
                protected route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.event = this.eventService.eventSelected;

        if (!this.event) {
            this.eventService.getRandomEvent().subscribe(response => {
                this.event = response as Event;
            })
        }
        this.tamanhoDaTela();
    }

    @HostListener('window:resize', ['$event'])
    @HostListener('window:load', ['$event'])
    // @ts-ignore
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

    public loadThumbImage(event: Event) {
        return this.loadImageEvent(event, 'THUMBNAIL');
    }

    public loadBannerImage(event: Event) {
        return this.loadImageEvent(event, 'BANNER');
    }

    private loadImageEvent(event: Event, typeImage: string) {
        let imageThumb: ImageEvent = null;

        if (event) {
            event.images.forEach(image => {
                if (image.imageType === typeImage) {
                    imageThumb = image;
                }
            })
        }

        if (imageThumb == null) {
            return 'assets/show-live.jpg';
        } else {
            return `${this.apiImageURL}/images/${imageThumb.imageId}`;
        }
    }

    searchEvents(event: String) {
        console.log(this.route.snapshot.params.searchWord);
    }
}
