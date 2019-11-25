import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { MentorloginComponent } from './mentorlogin/mentorlogin.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ UserloginComponent, MentorloginComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path:'login',component:LoginComponent,
      children:[{path:'userlogin',component:UserloginComponent},
      {path:'mentorlogin',component:MentorloginComponent}
    ]}
    ])

  ]
})
export class LoginModule { }
