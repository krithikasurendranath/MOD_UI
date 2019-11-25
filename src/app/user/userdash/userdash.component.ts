import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cuser } from 'src/app/models/cuser';
import { SuserService } from 'src/app/services/suser.service';

@Component({
  selector: 'app-userdash',
  templateUrl: './userdash.component.html',
  styleUrls: ['./userdash.component.css']
})
export class UserdashComponent implements OnInit {
  id:number;
  item:Cuser;
  Uname='';

  constructor(private router : Router,private _service:SuserService){
    this.item = new Cuser;
    this.id=+localStorage.getItem('token');
    this._service.Search(this.id).subscribe(k=>this.item=k);
    this.Uname=this.item.uname;
    console.log(this.Uname)
  }
// {
//      this.Uname=localStorage.getItem('token');
//  }
 

 ngOnInit() {
  if(localStorage.getItem('token')==null)
  {
    this.router.navigate(['userlogin']);
  }


}
logout(){
 localStorage.removeItem('token');
 this.router.navigate(['userlogin']);

 }
}
