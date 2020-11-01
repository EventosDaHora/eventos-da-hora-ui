import {Payment} from "./Payment";
import {TicketOrder} from "./TicketOrder";
import {BaseResourceModel} from "../base-resource.model";

export class Order extends BaseResourceModel {

    constructor(
        public id?: string,
        public userId?: number,
        public emailNotification?: string,
        public fees?: number,
        public payment?: Payment,
        public tickets: TicketOrder[] = []
    ){
        super()
    }

    static fromJson(jsonData: any): Order {
        return Object.assign(new Order(), jsonData);
    }


    public getId() {
        return this.id;
    }
}
