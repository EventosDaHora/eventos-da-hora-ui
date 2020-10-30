import {BaseResourceModel} from "./base-resource.model";

export class ImageEvent extends BaseResourceModel {

    constructor(
        public id?: string,
        public imageId?: string,
        public imageType?: string,
    ) {
        super()
    }

    static fromJson(jsonData: any): ImageEvent {
        return Object.assign(new ImageEvent(), jsonData);
    }

    public getId() {
        return this.id;
    }


}
