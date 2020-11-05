import {BaseResourceModel} from "./base-resource.model";
import {Ticket} from "./Ticket";
import {Event} from "./Event";

export class Section extends BaseResourceModel {

    constructor(
        public id?: string,
        public name?: string,
        public description?: string,
        public ammount?: number,
        public metadata?: string,
        public tickets?: Ticket[],
        public eventId?:number,

        public eventRequest?: Event
    ) {
        super()
    }

    static fromJson(jsonData: any): Section {
        return Object.assign(new Section(), jsonData);
    }

    public getId() {
        return this.id;
    }


}
