import {BaseResourceModel} from "../base-resource.model";

export class User extends BaseResourceModel {

  constructor(
    public idUser?: number,
    public idProfile?: number,
    public dtCreate?: Date,
    public dsEmail?: string,
    public nuCel?: string,
    public nmUser?: string,
    public dtLastLogin?: Date,
    public dsToken?: string,
    public dtExpiryToken?: Date,
    public isEmailVerified?: boolean
  ) {
    super();
  }

  static fromJson(jsonData: any): User {
    return Object.assign(new User(), jsonData);
  }

  public getId() {
    return this.idUser;
  }
}
