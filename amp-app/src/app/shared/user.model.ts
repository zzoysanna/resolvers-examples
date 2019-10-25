import { UserInterface } from "./user";

export class User implements UserInterface {
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
