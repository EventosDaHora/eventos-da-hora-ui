import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Event} from "../../../../../../dominio/Event";
import {Section} from "../../../../../../dominio/Section";
import {Ticket} from "../../../../../../dominio/Ticket";
import {TicketOrder} from "../../../../../../dominio/order/TicketOrder";


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
    change: EventEmitter<TicketOrder> = new EventEmitter<TicketOrder>();

    constructor() {
    }

    ngOnInit(): void {
    }

    public addTicket(section: Section) {
        console.log(section);
        this.change.emit(new TicketOrder(this.qtd, this.section));
    }
}
