import {Section} from "../Section";
import {Event} from "../Event";

export class TicketOrder {

    public id?: string;
    public event: Event;

    constructor(
        public quantity?: number,
        public section?: Section
    ) {
        this.id = section.id;
    }
}
