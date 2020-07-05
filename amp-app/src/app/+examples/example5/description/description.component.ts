import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'amp-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  public description: string;

  constructor(
    private route: ActivatedRoute,
  ) { }

  public ngOnInit(): void {
    this.route.parent.data.subscribe(
      ({course}) => this.description = course.description,
    )
  }

}
