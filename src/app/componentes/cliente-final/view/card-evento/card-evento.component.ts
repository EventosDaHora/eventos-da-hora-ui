// TODO: Buscar eventos de acordo com maior número de compras (Eventos Populares),
// perto da localização do usuário (Perto de você) e
// filmes populares

import {Component, Input, OnInit} from '@angular/core';
import {EventoService} from '../../../../services/evento/evento.service';
import {BaseResourceListComponent} from "../../../../infra/base-resource-list/base-resource-list.component";
import {Event} from "../../../../dominio/Event";
import {ImageEvent} from "../../../../dominio/ImageEvent";
import {DataService} from "../../../../services/data.service";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-card-evento',
    templateUrl: './card-evento.component.html',
    styleUrls: ['./card-evento.component.scss']
})
// @ts-ignore
export class CardEventoComponent extends BaseResourceListComponent<Event> {
    responsiveOptions;

    public searchWordSubscription: Subscription;
    public searchWord: string;

    public categoryIdSubscription: Subscription;
    public categoryId: string;

    @Input()
        // @ts-ignore
    mostrarInfosEvento ? = true;

    constructor(private eventoService: EventoService,
                private data: DataService) {
        super(eventoService);

        this.searchWordSubscription = this.data.currentMessageSearchWord.subscribe(item => {
            this.searchWord = item;
            if (this.searchWord != undefined) {
                this.eventoService.findEventBySearchWord(this.searchWord).subscribe(
                    response => this.   resources = response as Event[]
                )
            }
        });

        this.categoryIdSubscription = this.data.currentMessageCategoryId.subscribe(item => {
            this.categoryId = item;
            if (this.categoryId != undefined) {
                this.eventoService.findEventByCategoryId(this.categoryId).subscribe(
                    response => this.   resources = response as Event[]
                )
            }
        });

        this.responsiveOptions = [
            {
                breakpoint: '2000px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '1800px',
                numVisible: 4,
                numScroll: 4
            },

            {
                breakpoint: '1600px',
                numVisible: 3,
                numScroll: 4
            },
            {
                breakpoint: '1100px',
                numVisible: 2,
                numScroll: 5
            },
            {
                breakpoint: '900px',
                numVisible: 1,
                numScroll: 3
            }
        ];
    }

    public loadThumbImage(event: Event) {
        return this.loadImageEvent(event, 'THUMBNAIL');
    }

    public loadBannerImage(event: Event) {
        return this.loadImageEvent(event, 'BANNER');
    }

    private loadImageEvent(event: Event, typeImage: string) {
        let imageThumb: ImageEvent = null;

        event.images.forEach(image => {
            if (image.imageType === typeImage) {
                imageThumb = image;
            }
        })

        if (imageThumb == null) {
            return 'assets/show-live.jpg';
        } else {
            return `${this.apiImageURL}/images/${imageThumb.imageId}`;
        }
    }

    public selectEvent(event: Event) {
        this.eventoService.eventSelected = event;
    }
}
