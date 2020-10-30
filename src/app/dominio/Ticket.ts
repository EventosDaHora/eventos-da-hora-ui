import {BaseResourceModel} from "./base-resource.model";

export class Ticket extends BaseResourceModel {

    constructor(
        public id?: string,
        public initialQuantity?: number
    ) {
        super()
    }

    static fromJson(jsonData: any): Ticket {
        return Object.assign(new Ticket(), jsonData);
    }

    public getId() {
        return this.id;
    }


}
