import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Author } from "../../../models/author.model";

@Component({
  selector: 'amp-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {

  public authors: Author[];

  constructor(
    private route: ActivatedRoute,
  ) { }

  public ngOnInit(): void {
    this.route.parent.data.subscribe(
      ({course}) => this.authors = course.authors,
    )
  }

}
