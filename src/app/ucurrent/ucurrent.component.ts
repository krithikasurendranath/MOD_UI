import { Component, OnInit } from '@angular/core';
import { Cuser } from '../models/cuser';
import { Ctraining } from '../models/ctraining';
import { Router } from '@angular/router';
import { SuserService } from '../services/suser.service';
import { TrainingService } from '../services/training.service';

@Component({
  selector: 'app-ucurrent',
  templateUrl: './ucurrent.component.html',
  styleUrls: ['./ucurrent.component.css']
})
export class UcurrentComponent implements OnInit {

  item:Cuser;
  list:Cuser[];
  msg:string;
  addclick;
  lists:Ctraining[];
  items:Ctraining;

  UserName:number;
  constructor(private router : Router,private _service:SuserService,private _trservice:TrainingService) {
    this.UserName = +localStorage.getItem('token');
    this.item=new Cuser();
    this._service.GetUser().subscribe(k=>this.list=k);
    this.item.uid=this.UserName;
    this.items=new Ctraining();
   
   }

  ngOnInit() {
    if(localStorage.getItem('token')==null)
    {
      this.router.navigate(['login']);
    }
 
 
 }
 logout(){
   localStorage.removeItem('token');
   this.router.navigate(['login']);
 
   }
   public add()
  {
    this.addclick=1;
  }
   public Update()
{
  this.item.uactive=true;
  // this.item.active=true;
  // this.item.availability=true;
  this._service.Update(this.item).subscribe(k=>k=this.msg)
}
public UserCurrentTrainings(){
  this._trservice.GetTrainingByUser(this.UserName).subscribe(k=>this.lists=k);
  // this.curtrainingclick=1;
  // this.updatepassclick=0;
}


  }



