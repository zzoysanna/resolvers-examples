import { ICourse } from "./course";

export class Course implements ICourse {
  constructor(
    public id: string,
    public title: string,
    public creationDate: string,
    public duration: number,
    public description: string,
    public topRated: boolean,
    public authors: any[],
  ) {
    this.id = id;
    this.title = title;
    this.creationDate = creationDate;
    this.duration = duration;
    this.description = description;
    this.topRated = topRated;
    this.authors = authors;
  }
}
