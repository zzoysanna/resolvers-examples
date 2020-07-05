import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'amp-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {

  public authors: any[];

  constructor(
    private route: ActivatedRoute,
  ) { }

  public ngOnInit(): void {
    this.route.parent.data.subscribe(
      ({course}) => this.authors = course.authors,
    )
  }

}
