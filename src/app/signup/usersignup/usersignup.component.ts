import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cuser } from 'src/app/models/cuser';
import { SuserService } from 'src/app/services/suser.service';

@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.css']
})
export class UsersignupComponent implements OnInit {
  item:Cuser;
  list:Cuser[];
  msg:string;
  

  constructor(private _service:SuserService) { 
    this.item=new Cuser();
    this._service.GetUser().subscribe(k=>this.list=k)
  }
  

  ngOnInit() {
  }
  public Add(){
    this.item.uactive=true;
    console.log(this.item);
    this._service.Add(this.item).subscribe(k=>this.msg=k)
    }
    public Search(){
      this._service.Search(this.item.uid).subscribe(k=>this.item=k)
      console.log(this.item);
    }
    public Update(){
      this._service.Update(this.item).subscribe(k=>k=this.msg)
    }
    public Delete()
    {
      this._service.Delete(this.item.uid).subscribe(k=>k=this.msg)
    }


  }













