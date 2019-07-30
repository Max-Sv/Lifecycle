import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Lifecycle';
  public name: string;
  public total: number;
  public skill: number[] = [0, 0, 0];
  getName(name: string) {
    this.name = name;
  }
  changeSkill(arr: any) {
    arr[0] ? this.skill[arr[1]]++ : this.skill[arr[1]]--;
    this.total = this.skill.reduce((sum, item) => (sum += item), 0);
  }
  ngOnChanges() {
    console.log('%c ngOnChanges', 'color: red;');
  }
  ngOnInit() {
    console.log('%c ngOnInit', 'color: red');
  }
  ngDoCheck() {
    console.log('%c ngDoCheck', 'color: red');
  }
  ngAfterContentInit() {
    console.log('%c ngAfterContentInit', 'color: red');
  }
  ngAfterContentChecked() {
    console.log('%c ngAfterContentChecked', 'color: red');
  }
  ngAfterViewInit() {
    console.log('%c ngAfterViewInit', 'color: red');
  }
  ngAfterViewChecked() {
    console.log('%c ngAfterViewChecked', 'color: red');
  }
  ngOnDestroy() {
    console.log('%c ngOnDestroy', 'color: red');
  }
}
