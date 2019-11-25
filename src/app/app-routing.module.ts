import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MentorComponent } from './mentor/mentor.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { SignupComponent } from './signup/signup.component';
import { UserloginComponent } from './login/userlogin/userlogin.component';
import { MentorloginComponent } from './login/mentorlogin/mentorlogin.component';
import { MentorsignupComponent } from './signup/mentorsignup/mentorsignup.component';
import { UsersignupComponent } from './signup/usersignup/usersignup.component';
import { AdminsignupComponent } from './signup/adminsignup/adminsignup.component';
import { UserdashComponent } from './user/userdash/userdash.component';
import { MentordashComponent } from './mentor/mentordash/mentordash.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { AdminuserComponent } from './adminuser/adminuser.component';
import { AdminmentorComponent } from './adminmentor/adminmentor.component';
import { AdmintrainingComponent } from './admintraining/admintraining.component';
import { AdmintechnologyComponent } from './admintechnology/admintechnology.component';
import { AdminpaymentComponent } from './adminpayment/adminpayment.component';
import { NewsComponent } from './news/news.component';
import { IotComponent } from './iot/iot.component';
import { ProgramComponent } from './program/program.component';
import { AiComponent } from './ai/ai.component';
import { SearchComponent } from './search/search.component';
import { UcompletedComponent } from './ucompleted/ucompleted.component';
import { McompletedComponent } from './mcompleted/mcompleted.component';
import { UcurrentComponent } from './ucurrent/ucurrent.component';
import { McurrentComponent } from './mcurrent/mcurrent.component';






const routes: Routes = [
  {path: 'user',component: UserComponent},
  {path: 'admin',component: AdminComponent},
  {path: 'mentor',component: MentorComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup',component: SignupComponent},
 
  {path: 'userlogin',component: UserloginComponent},
  //{path: 'mentorlogin',component: MentorloginComponent},
  {path: 'usersignup',component: UsersignupComponent},
  {path: 'mentorsignup',component: MentorsignupComponent},
  {path: 'adminsignup',component: AdminsignupComponent},
  {path: 'userdash' , component: UserdashComponent,children:
  [{path: 'ucurrent', component: UcurrentComponent},
  {path: 'ucompleted',component: UcompletedComponent},
]},
  {path: 'mentordash', component: MentordashComponent,children:
 [{path: 'mcompleted', component: McompletedComponent},
 {path: 'mcurrent', component: McurrentComponent},
]},
  {path: 'admindash', component: AdmindashComponent,children:[
  {path: 'adminuser', component: AdminuserComponent},
  {path: 'adminmentor', component: AdminmentorComponent},
  {path: 'admintraining', component: AdmintrainingComponent},
  {path: 'admintechnology', component: AdmintechnologyComponent},
  {path: 'adminpayment', component: AdminpaymentComponent},
  ]},
  {path: 'news', component:NewsComponent},
  {path: 'iot', component:IotComponent},
  {path: 'program', component:ProgramComponent},
  {path: 'ai', component:AiComponent},
  {path: 'search', component:SearchComponent},
  {path: '',component:UserComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
