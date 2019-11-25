import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MentorComponent } from './mentor.component';
import { MentordashComponent } from './mentordash/mentordash.component';



@NgModule({
  declarations: [MentorComponent, MentordashComponent],
  imports: [
    CommonModule
  ]
})
export class MentorModule { }
