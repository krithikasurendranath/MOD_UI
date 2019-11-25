import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserdashComponent } from './userdash/userdash.component';



@NgModule({
  declarations: [UserComponent, UserdashComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
