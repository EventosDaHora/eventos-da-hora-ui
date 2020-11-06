import {BaseResourceModel} from "./base-resource.model";
import {Section} from "./Section";

export class Ticket extends BaseResourceModel {

    constructor(
        public id?: number,
        public initialQuantity?: number,
        public sectionId?: number,

        public sectionRequest?: Section,
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
