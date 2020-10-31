import {BaseResourceModel} from "./base-resource.model";
import {Category} from "./Category";
import {StatusEvent} from "./StatusEvent";
import {Localization} from "./Localization";
import {Section} from "./Section";
import {ImageEvent} from "./ImageEvent";

export class Event extends BaseResourceModel {

    constructor(
        public id?: string,
        public name?: string,
        public date?: Date,
        public description?: string,
        public category?: Category,
        public status?: StatusEvent,
        public localization?: Localization,
        public sections?: Section[],
        public images?: ImageEvent[],
    ) {
        super()
    }

    public getId() {
        return this.id;
    }

    static fromJson(jsonData: any): Event {
        return Object.assign(new Event(), jsonData);
    }

    // export interface Ingresso {
    //   id: string;
    //   tipos: TipoIngresso[];
    //   meiaEntrada ?: false;
    // }
    //
    // export interface TipoIngresso {
    //   preco: number;
    //   descricao ?: string;
    //   quantidade: number;
    // }
    //
    // export interface Localizacao {
    //   latitude ?: string;
    //   longitude ?: string;
    //   imagemCidade ?: string;
    //   pais: string;
    //   cidade: string;
    //   local: string;
    // }

}
