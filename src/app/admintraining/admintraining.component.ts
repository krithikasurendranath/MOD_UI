import { Component, OnInit } from '@angular/core';
import { Ctraining } from '../models/ctraining';
import { TrainingService } from '../services/training.service';

@Component({
  selector: 'app-admintraining',
  templateUrl: './admintraining.component.html',
  styleUrls: ['./admintraining.component.css']
})
export class AdmintrainingComponent implements OnInit {

  item:Ctraining;
  list:Ctraining[];
  msg:string;
  constructor(private _service:TrainingService) { 
    this.item=new Ctraining();
    this._service.GetTraining().subscribe(k=>this.list=k)
  }
 ngOnInit() {
  }

}
