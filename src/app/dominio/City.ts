import {BaseResourceModel} from "./base-resource.model";

export class City extends BaseResourceModel {

    constructor(
        public id?: string,
        public description?: string
    ) {
        super()
    }

    static fromJson(jsonData: any): City {
        return Object.assign(new City(), jsonData);
    }

    public getId() {
        return this.id;
    }

}
