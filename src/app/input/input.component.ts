import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html'
  // styleUrls: ['./app.component.sass']
})
export class InputComponent {
  public name = '';
  public s1 = 0;
  public s2 = 0;
  public s3 = 0;
  onKey(event: any) {
    this.name = event.target.value;
  }

  add(s) {
    console.log(s++);
  }
}
