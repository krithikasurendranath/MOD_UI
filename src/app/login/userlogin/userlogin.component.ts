import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cuser } from 'src/app/models/cuser';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  [x: string]: any;
  email;
  pwd;
  userList:Cuser[]=[];

  constructor(private http:HttpClient,private router:Router,private _service:LoginService) { }
  
  ngOnInit() {
  }
  public Login()
  {
    this._service.Login(this.email,this.pwd).subscribe(data=>{
      console.log(data)
      if(data.message=='User')
      {
        console.log("HAHAHAHHAHAHA");
        localStorage.setItem('token',data.token);
        //console.log(data.token);
        this.router.navigate(['userdash'],{relativeTo:this._activatedRoute});
      }
      else if(data.message=='Mentor')
      {
        localStorage.setItem('token',data.token);
        this.router.navigate(['mentordash'],{relativeTo:this._activatedRoute});
      }
      else if(data.message=='Admin')
      {
        this.router.navigate(['admindash'],{relativeTo:this._activatedRoute});
      }
      else
      {
        console.log("Nothing found");
      }

    },
    err=>{
       console.log("subscribe err");
    });
  }

  

}


  