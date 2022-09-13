import {Component, HostBinding, HostListener, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {animations} from "./animation";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: [animations]
})
export class SearchComponent implements OnInit {
  public skipClick = false;
  public form!: FormGroup;
  public searchValue: string = '';
  public filterOn: boolean = false;

  @HostBinding('class')
  hostClass = 'hidden';
  isAnimation = 'start';

  constructor() {

  }

  ngOnInit(): void {
    this.form = new FormGroup({
      searchParams : new FormControl('', Validators.required),
      my: new FormControl(false),
      author: new FormControl(''),
      optionLabel: new FormControl('date'),
      participant: new FormControl(false),
      inHeader: new FormControl(false),
      strict: new FormControl(false),
    })
  }

  @HostListener('click', ['$event'])
  hostClick(event: Event) {
    event.stopPropagation();
  }

  show() {
    this.hostClass = '';
    this.skipClick = true;
    this.isAnimation = 'end';
  }

  @HostListener('window:click')
  hide() {
    if (this.skipClick) {
      this.skipClick = false;
      this.filterOn = false;
      return;
    }
    this.hostClass = 'hidden';
  }

  openFilter() {
    this.filterOn = true;
  }

  submit() {
    console.log(this.form.value)
  }

  cleanSearchLine() {
    this.searchValue = this.form.controls['searchParams'].value;
    this.searchValue = '';
  }
}
