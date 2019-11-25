import { Component, OnInit } from '@angular/core';
import { Ctraining } from '../models/ctraining';
import { Cmentor } from '../models/cmentor';
import { SmentorService } from '../services/smentor.service';
import { Router } from '@angular/router';
import { TrainingService } from '../services/training.service';

@Component({
  selector: 'app-mcurrent',
  templateUrl: './mcurrent.component.html',
  styleUrls: ['./mcurrent.component.css']
})
export class McurrentComponent implements OnInit {
  item:Cmentor;
  list:Cmentor[];
  msg:string;
  addclick;
  lists:Ctraining[];
  items:Ctraining;
  MentorName:number;

  constructor(private router : Router,private _service:SmentorService,private _trservice:TrainingService) {
    this.MentorName = +localStorage.getItem('token');
    this.item=new Cmentor();
    this._service.GetAll().subscribe(k=>this.list=k);
    this.item.mid=this.MentorName;
    this.items=new Ctraining();
   }

  ngOnInit() {
    if(localStorage.getItem('token')==null)
    {
      this.router.navigate(['login']);
    }

  }
  public add()
  {
    this.addclick=1;
  }
   public Update()
{
  this.item.mactive=true;
  // this.item.active=true;
  // this.item.availability=true;
  this._service.Update(this.item).subscribe(k=>k=this.msg)
}

}
