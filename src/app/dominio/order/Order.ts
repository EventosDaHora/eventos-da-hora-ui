import {BaseResourceModel} from "../base-resource.model";
import {Ticket} from "../Ticket";
import {Payment} from "../payment/Payment";

export class Order extends BaseResourceModel {

    constructor(
        public id?: string,
        public userId?: number,
        public dtCreate?: Date,
        public status?: string,
        public idPayment?: number,
        public fees?: number,
        public items: Ticket[] = [],

        public paymentRequest?: Payment
    ) {
        super()
    }

    static fromJson(jsonData: any): Order {
        return Object.assign(new Order(), jsonData);
    }

    public getId() {
        return this.id;
    }
}
