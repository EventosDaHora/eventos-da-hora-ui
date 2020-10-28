import {BaseResourceModel} from "../base-resource.model";

export class UserResetPassword extends BaseResourceModel {

  constructor(
    public dsEmail?: string,
  ) {
    super();
  }

  static fromJson(jsonData: any): UserResetPassword {
    return Object.assign(new UserResetPassword(), jsonData);
  }

  public getId() {
    return
  }
}
