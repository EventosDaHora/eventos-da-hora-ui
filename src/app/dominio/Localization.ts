import {Country} from "./Country";
import {City} from "./City";
import {BaseResourceModel} from "./base-resource.model";

export class Localization extends BaseResourceModel {

    constructor(
        public localization?: string,
        public cep?: string,
        public address?: string,
        public complement?: string,
        public number?: string,
        public country?: Country,
        public city?: City,
    ) {
        super()
        this.country = new Country();
        this.city = new City();
    }

    static fromJson(jsonData: any): Localization {
        return Object.assign(new Localization(), jsonData);
    }

    public getId() {
        return;
    }

}
