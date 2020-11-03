import {BaseResourceModel} from "../base-resource.model";
import {Ticket} from "../Ticket";

export class TicketOrderRequest extends BaseResourceModel {

    constructor(
        public id?: string,
        public externalItemId?: number,
        public qtdItems?: number
    ) {
        super()
    }

    public getId() {
        return this.id;
    }

    static fromJson(jsonData: any): Ticket {
        return Object.assign(new Ticket(), jsonData);
    }
}
