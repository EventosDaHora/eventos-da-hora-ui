import {Section} from "../Section";

export class TicketOrder {

    public id?: string;

    constructor(
        public quantity?: number,
        public section?: Section
    ) {
        this.id = section.getId();
    }
}
