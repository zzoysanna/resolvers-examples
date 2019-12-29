import { IAuthor } from "./author";

export class Author implements IAuthor{
  constructor(
    public id: string,
    public name: string,
  ) {
    this.id = id;
    this.name = name;
  }
}
