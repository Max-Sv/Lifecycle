import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { InputComponent } from './input/input.component';
import { SkillCompanent } from './skills/skill1.component';
import { Skill2Companent } from './skills/skill2.component';
import { Skill3Companent } from './skills/skill3.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    SkillCompanent,
    Skill2Companent,
    Skill3Companent
  ],
  imports: [BrowserModule, BrowserAnimationsModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
