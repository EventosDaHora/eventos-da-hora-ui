import {PaymentRequest} from "./PaymentRequest";
import {TicketOrderRequest} from "./TicketOrderRequest";
import {BaseResourceModel} from "../../base-resource.model";

export class OrderRequest extends BaseResourceModel {

    constructor(
        public id?: string,
        public userId?: number,
        public emailNotification?: string,
        public fees?: number,
        public payment?: PaymentRequest,
        public tickets: TicketOrderRequest[] = []
    ){
        super()
    }

    static fromJson(jsonData: any): OrderRequest {
        return Object.assign(new OrderRequest(), jsonData);
    }

    public getId() {
        return this.id;
    }
}
