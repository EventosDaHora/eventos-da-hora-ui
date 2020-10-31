import {Payment} from "./Payment";
import {TicketOrder} from "./TicketOrder";

export class Order {

    constructor(
        public id?: string,
        public quantity?: string,
        public userId?: number,
        public emailNotification?: string,
        public fees?: number,
        public payment?: Payment,
        public tickets: TicketOrder[] = []
    ) {
    }

}
