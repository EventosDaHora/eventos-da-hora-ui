import {BaseResourceModel} from "../base-resource.model";

export class UserCreatePassword extends BaseResourceModel {

  constructor(
    public idUser?: number,
    public newPassword?: string,
  ) {
    super();
  }

  static fromJson(jsonData: any): UserCreatePassword {
    return Object.assign(new UserCreatePassword(), jsonData);
  }

  public getId() {
    return this.idUser;
  }

}
