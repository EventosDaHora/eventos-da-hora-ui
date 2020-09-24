
export class UserAuth{
  username: string;
  password: string;
  rol: string [] = [];

  static fromJson(jsonData: any): UserAuth {
    return Object.assign(new UserAuth(), jsonData);
  }

  getId() {
  }
}

