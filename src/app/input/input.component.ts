import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.sass']
})
export class InputComponent {
  @Output() getName = new EventEmitter<string>();
  public name = '';
  onKey(event: any) {
    this.name = event.target.value;
    this.getName.emit(this.name);
  }

  ngOnChanges() {
    console.log('%c ngOnChanges', 'color: green;');
  }
  ngOnInit() {
    console.log('%c ngOnInit', 'color: green');
  }
  ngDoCheck() {
    console.log('%c ngDoCheck', 'color: green');
  }
  ngAfterContentInit() {
    console.log('%c ngAfterContentInit', 'color: green');
  }
  ngAfterContentChecked() {
    console.log('%c ngAfterContentChecked', 'color: green');
  }
  ngAfterViewInit() {
    console.log('%c ngAfterViewInit', 'color: green');
  }
  ngAfterViewChecked() {
    console.log('%c ngAfterViewChecked', 'color: green');
  }
  ngOnDestroy() {
    console.log('%c ngOnDestroy', 'color: green');
  }
}
