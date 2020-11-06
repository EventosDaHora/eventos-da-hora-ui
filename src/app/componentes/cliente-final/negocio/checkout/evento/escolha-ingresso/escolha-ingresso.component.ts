import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Event} from "../../../../../../dominio/Event";
import {Section} from "../../../../../../dominio/Section";
import {Ticket} from "../../../../../../dominio/Ticket";
import {TicketOrderRequest} from "../../../../../../dominio/order/request/TicketOrderRequest";
import {NotificationService} from "../../../../../../services/notification.service";


@Component({
    selector: 'app-escolha-ingresso',
    templateUrl: './escolha-ingresso.component.html',
    styleUrls: ['./escolha-ingresso.component.scss']
})
export class EscolhaIngressoComponent implements OnInit {

    qtd: number = 1;

    @Input()
    section: Section;

    @Output()
    change: EventEmitter<TicketOrderRequest> = new EventEmitter<TicketOrderRequest>();

    constructor(public notificationService: NotificationService) {
    }

    ngOnInit(): void {
    }

    public addTicket(section: Section) {
        this.change.emit(new TicketOrderRequest(this.qtd, this.section));
        this.notificationService.success("Adicionado com sucesso", "Ingresso")
    }
}
