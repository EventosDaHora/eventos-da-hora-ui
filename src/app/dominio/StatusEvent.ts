import {BaseResourceModel} from "./base-resource.model";

export class StatusEvent extends BaseResourceModel {

    constructor(
        public id?: string,
        public statusEvent?: string,
    ) {
        super()
    }

    static fromJson(jsonData: any): StatusEvent {
        return Object.assign(new StatusEvent(), jsonData);
    }

    public getId() {
        return this.id;
    }

}
