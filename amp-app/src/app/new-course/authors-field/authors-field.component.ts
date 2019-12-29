import { Component, OnInit, Input, forwardRef, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Author } from '../../models/author.model';
import { fromEvent } from "rxjs";
import { debounceTime, filter, switchMap, map, tap } from 'rxjs/operators';
import { AuthorsService } from 'src/app/services/authors.service';

@Component({
  selector: 'amp-authors-field',
  templateUrl: './authors-field.component.html',
  styleUrls: ['./authors-field.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AuthorsFieldComponent),
    multi: true,
  }],
})
export class AuthorsFieldComponent implements OnInit, ControlValueAccessor, AfterViewInit {

  @Input()
  public value: Author[];

  @ViewChild('inputField', {static: false})
  public inputField: ElementRef;

  public query: string;
  public authorsList: Author[];

  constructor(
    private authorsService: AuthorsService,
  ) { }

  public ngOnInit() {
  }

  public ngAfterViewInit() {
    fromEvent(this.inputField.nativeElement, 'keyup').pipe(
      debounceTime(500),
      tap(() => {
        if(this.query.length < 3) {
          this.authorsList = [];
        }
      }),
      filter(() => this.query.length >= 3),
      switchMap(() => this.authorsService.search(this.query)),
      filter(authors => !!authors),
      map(authors => authors.slice(0, 6)),
    ).subscribe(
      authors => {
        this.authorsList = authors;
      }
    );
  }

  public removeAuthor(id: string): void {
    this.value = this.value.filter(author => author.id !== id);
    this.change(this.value);
  }

  public addAuthor(author: Author): void {
    if(!this.value){
      this.value = [];
    }
    this.value.push(author);
    this.change(this.value);
    this.authorsList = [];
    this.query = '';
  }

  public change(value: Author[]): void {
    this.writeValue(value);
    this.onChange(value);
    this.onTouched();
  }

  private onChange: any = () => {};
  private onTouched: any = () => {};

  public writeValue(value: Author[]): void {
    this.value = value;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

}
