import {Login} from './Login';
import {BaseResourceModel} from "./base-resource.model";

export class Categoria extends BaseResourceModel {

    constructor(
        public id?: string,
        public name?: string,
        public description?: string,
    ) {
        super()
    }

    static fromJson(jsonData: any): Categoria {
        return Object.assign(new Categoria(), jsonData);
    }

    public getId() {
        return this.id;
    }

}
