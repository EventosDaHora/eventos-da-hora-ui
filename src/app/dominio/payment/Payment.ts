import {BaseResourceModel} from "../base-resource.model";

export class Payment extends BaseResourceModel {

    constructor(
        public id?: string,
        public dtCreate?: Date,
        public paymentStatus?: string,
        public paymentType?: string,
        public vlAmount?: number,
    ) {
        super()
    }

    public getId() {
        return this.id;
    }

    static fromJson(jsonData: any): Payment {
        return Object.assign(new Payment(), jsonData);
    }


}
