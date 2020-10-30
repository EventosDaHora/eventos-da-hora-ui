import {BaseResourceModel} from "./base-resource.model";
import {Ticket} from "./Ticket";

export class Section extends BaseResourceModel {

    constructor(
        public id?: string,
        public name?: string,
        public description?: string,
        public ammount?: number,
        public metadata?: string,
        public tickets?: Ticket[],
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
