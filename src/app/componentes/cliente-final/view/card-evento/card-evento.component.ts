// TODO: Buscar eventos de acordo com maior número de compras (Eventos Populares),
// perto da localização do usuário (Perto de você) e
// filmes populares

import {Component, Input, OnInit} from '@angular/core';
import {EventoService} from '../../../../services/evento/evento.service';
import {BaseResourceListComponent} from "../../../../infra/base-resource-list/base-resource-list.component";
import {Event} from "../../../../dominio/Event";
import {ImageEvent} from "../../../../dominio/ImageEvent";

@Component({
    selector: 'app-card-evento',
    templateUrl: './card-evento.component.html',
    styleUrls: ['./card-evento.component.scss']
})
// @ts-ignore
export class CardEventoComponent extends BaseResourceListComponent<Event> {
    responsiveOptions;

    @Input()
    // @ts-ignore
    mostrarInfosEvento ? = true;

    constructor(private eventoService: EventoService) {
      super(eventoService);
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
        console.log(event);
        return this.loadImageEvent(event, 'THUMBNAIL');
    }

    public loadBannerImage(event: Event) {
        return this.loadImageEvent(event, 'BANNER');
    }

    private loadImageEvent(event: Event, typeImage: string) {
        let imageThumb: ImageEvent = null;

        event.images.forEach(image =>{
            console.log(image.imageType);
            if(image.imageType === typeImage){
                imageThumb = image;
            }
        })

        if(imageThumb == null){
            return 'assets/show-live.jpg';
        }else{
            return `${this.apiImageURL}/images/${imageThumb.imageId}`;
        }
    }

}
