import { IUser } from "./user";

export class User implements IUser {
  constructor(
    public id: string,
    public fakeToken: string,
    public login: string,
    public password: string,
    public name: {
      first: string,
      last: string,
    },
  ) {
    this.id = id;
    this.fakeToken = fakeToken;
    this.login = login;
    this.password = password;
    this.name = name;
  }
}
