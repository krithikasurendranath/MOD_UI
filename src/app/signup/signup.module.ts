import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { MentorsignupComponent } from './mentorsignup/mentorsignup.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';
import { ConfirmpassDirective } from './usersignup/confirmpass.directive';





@NgModule({
  declarations: [ UsersignupComponent, MentorsignupComponent, AdminsignupComponent, ConfirmpassDirective],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forChild([
      {path:'signup',component:SignupComponent,
      children:[{path:'usersignup',component:UsersignupComponent},
      {path:'mentorsignup',component:MentorsignupComponent},
      {path:'adminsignup',component:AdminsignupComponent}
    ]}
    ])

  ]
})
export class SignupModule { }
