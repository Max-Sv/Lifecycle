import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-skill2',
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
  styles: ['.skill { font-size: 20px; color: #ad6beb }']
})
export class Skill2Companent {
  public skillN = 1;
  @Input() userName: string;
  @Input() skill: number;
  @Output() changeSkill = new EventEmitter<any>();
  add(inc: boolean) {
    const arr = [inc, this.skillN];
    this.changeSkill.emit(arr);
  }
  ngOnChanges() {
    console.log('%c ngOnChanges', 'color: #ad6beb;');
  }
  ngOnInit() {
    console.log('%c ngOnInit', 'color: #ad6beb');
  }
  ngDoCheck() {
    console.log('%c ngDoCheck', 'color: #ad6beb');
  }
  ngAfterContentInit() {
    console.log('%c ngAfterContentInit', 'color: #ad6beb');
  }
  ngAfterContentChecked() {
    console.log('%c ngAfterContentChecked', 'color: #ad6beb');
  }
  ngAfterViewInit() {
    console.log('%c ngAfterViewInit', 'color: #ad6beb');
  }
  ngAfterViewChecked() {
    console.log('%c ngAfterViewChecked', 'color: #ad6beb');
  }
  ngOnDestroy() {
    console.log('%c ngOnDestroy', 'color: #ad6beb');
  }
}
