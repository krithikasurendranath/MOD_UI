import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-adminsignup',
  templateUrl: './adminsignup.component.html',
  styleUrls: ['./adminsignup.component.css']
})
export class AdminsignupComponent implements OnInit {
  email1=new FormControl('',[
    Validators.required,
    Validators.email
  ]);

  constructor(private http : HttpClient) { }
  username="";
  password="";
  repeatpassword="";
  register2(username,password,repeatpassword){
    console.log(this.username+" "+this.password+" "+this.repeatpassword);
    const req=this.http.post('http://localhost:8071/api/adminsignupdata',{
      username:this.username,
      password:this.password,
      repeatpassword:this.repeatpassword,
    }).subscribe(
      res=>{
        console.log(res);
      },
      err=>{
        console.log("error occured")
      });
  }


  ngOnInit() {
  }

}
