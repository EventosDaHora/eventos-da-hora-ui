import {BaseResourceModel} from "./base-resource.model";

export class Country extends BaseResourceModel {

    constructor(
        public id?: string,
        public description?: string
    ) {
        super()
    }

    static fromJson(jsonData: any): Country {
        return Object.assign(new Country(), jsonData);
    }

    public getId() {
        return this.id;
    }

}
