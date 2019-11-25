import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { MentorComponent } from './mentor/mentor.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';
import { SignupComponent } from './signup/signup.component';
import { SignupModule } from './signup/signup.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AdminsignupComponent } from './signup/adminsignup/adminsignup.component';
import { MentorsignupComponent } from './signup/mentorsignup/mentorsignup.component';
import { UsersignupComponent } from './signup/usersignup/usersignup.component';
import { EmailValidatorDirective } from './email-validator.directive';
import { PasswordValidatorDirective } from './password-validator.directive';
import { SuserService } from './services/suser.service';
import { SmentorService } from './services/smentor.service';
import { UserdashComponent } from './user/userdash/userdash.component';
import { MentordashComponent } from './mentor/mentordash/mentordash.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { AdminuserComponent } from './adminuser/adminuser.component';
import { AdminmentorComponent } from './adminmentor/adminmentor.component';
import { AdmintrainingComponent } from './admintraining/admintraining.component';
import { AdmintechnologyComponent } from './admintechnology/admintechnology.component';
import { AdminpaymentComponent } from './adminpayment/adminpayment.component';
import { NewsComponent } from './news/news.component';
import { AiComponent } from './ai/ai.component';
import { ProgramComponent } from './program/program.component';
import { IotComponent } from './iot/iot.component';
import { SearchComponent } from './search/search.component';
import { UcompletedComponent } from './ucompleted/ucompleted.component';
import { McompletedComponent } from './mcompleted/mcompleted.component';
import { UcurrentComponent } from './ucurrent/ucurrent.component';
import { McurrentComponent } from './mcurrent/mcurrent.component';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserdashComponent,
    AdmindashComponent,
    AdminuserComponent,
    AdminmentorComponent,
    AdminpaymentComponent,
    AdmintechnologyComponent,
    AdmintrainingComponent,
    MentorComponent,
    MentordashComponent,
    AdminComponent,
    AdmindashComponent,
    LoginComponent,
    SignupComponent,
    EmailValidatorDirective,
    PasswordValidatorDirective,
    NewsComponent,
    AiComponent,
    ProgramComponent,
    IotComponent,
    SearchComponent,
    UcompletedComponent,
    McompletedComponent,
    UcurrentComponent,
    McurrentComponent,
    
    // UsersignupComponent,
    // MentorsignupComponent,
    //AdminsignupComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    SignupModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [SuserService,SmentorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
  