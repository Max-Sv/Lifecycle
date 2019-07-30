import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-skill3',
  template: `
    <div class="skill">
      <span>{{ userName }}'s Skill #{{ skillN + 1 }} value is {{ skill }}</span>
      <button mat-icon-button (click)="add(true)">
        <mat-icon>add_circle_outline</mat-icon>
      </button>
      <button mat-icon-button (click)="add(false)">
        <mat-icon>
          remove_circle_outline
        </mat-icon>
      </button>
    </div>
  `,
  styles: ['.skill { font-size: 20px; color: #4dd2ff }']
})
export class Skill3Companent {
  public skillN = 2;
  @Input() userName: string;
  @Input() skill: number;
  @Output() changeSkill = new EventEmitter<any>();
  add(inc: boolean) {
    const arr = [inc, this.skillN];
    this.changeSkill.emit(arr);
  }
  ngOnChanges() {
    console.log('%c ngOnChanges', 'color: #4dd2ff;');
  }
  ngOnInit() {
    console.log('%c ngOnInit', 'color: #4dd2ff');
  }
  ngDoCheck() {
    console.log('%c ngDoCheck', 'color: #4dd2ff');
  }
  ngAfterContentInit() {
    console.log('%c ngAfterContentInit', 'color: #4dd2ff');
  }
  ngAfterContentChecked() {
    console.log('%c ngAfterContentChecked', 'color: #4dd2ff');
  }
  ngAfterViewInit() {
    console.log('%c ngAfterViewInit', 'color: #4dd2ff');
  }
  ngAfterViewChecked() {
    console.log('%c ngAfterViewChecked', 'color: #4dd2ff');
  }
  ngOnDestroy() {
    console.log('%c ngOnDestroy', 'color: #4dd2ff');
  }
}
