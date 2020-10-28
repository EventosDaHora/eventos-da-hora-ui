import {BaseResourceModel} from "../base-resource.model";

export class UserChangePassword extends BaseResourceModel {

  constructor(
    public idUser?: number,
    public newPassword?: string,
    public oldPassword?: string,
  ) {
    super();
  }

  static fromJson(jsonData: any): UserChangePassword {
    return Object.assign(new UserChangePassword(), jsonData);
  }

  public getId() {
    return this.idUser;
  }
}
