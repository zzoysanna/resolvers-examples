import { IUser } from "./user";

export class User implements IUser {
  constructor(
    public id: string,
    public firstName: string,
    public lastName: string,
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
