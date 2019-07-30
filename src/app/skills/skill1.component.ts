import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-skill1',
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
  styles: ['.skill { font-size: 20px; color: #4d4dff }']
})
export class SkillCompanent {
  public skillN = 0;
  @Input() userName: string;
  @Input() skill: number;
  @Output() changeSkill = new EventEmitter<any>();
  add(inc: boolean) {
    const arr = [inc, this.skillN];
    this.changeSkill.emit(arr);
  }
  ngOnChanges() {
    console.log('%c ngOnChanges', 'color: #4d4dff;');
  }
  ngOnInit() {
    console.log('%c ngOnInit', 'color: #4d4dff');
  }
  ngDoCheck() {
    console.log('%c ngDoCheck', 'color: #4d4dff');
  }
  ngAfterContentInit() {
    console.log('%c ngAfterContentInit', 'color: #4d4dff');
  }
  ngAfterContentChecked() {
    console.log('%c ngAfterContentChecked', 'color: #4d4dff');
  }
  ngAfterViewInit() {
    console.log('%c ngAfterViewInit', 'color: #4d4dff');
  }
  ngAfterViewChecked() {
    console.log('%c ngAfterViewChecked', 'color: #4d4dff');
  }
  ngOnDestroy() {
    console.log('%c ngOnDestroy', 'color: #4d4dff');
  }
}
