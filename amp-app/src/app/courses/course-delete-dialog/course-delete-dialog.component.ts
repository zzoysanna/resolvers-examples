import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

@Component({
  selector: 'amp-course-delete-dialog',
  templateUrl: './course-delete-dialog.component.html',
  styleUrls: ['./course-delete-dialog.component.scss']
})
export class CourseDeleteDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CourseDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  public ngOnInit() {
  }

  public onDelete(): void {
    this.dialogRef.close(true);
  }

}
