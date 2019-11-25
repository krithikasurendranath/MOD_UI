import { Component, OnInit } from '@angular/core';
import { Ctraining } from '../models/ctraining';
import { TrainingService } from '../services/training.service';

@Component({
  selector: 'app-mcompleted',
  templateUrl: './mcompleted.component.html',
  styleUrls: ['./mcompleted.component.css']
})
export class McompletedComponent implements OnInit {
 
    item:Ctraining;
    list:Ctraining[];
    msg:string;
    id:number;
    constructor(private _service:TrainingService) {
      this.item = new Ctraining();
      this.id=+localStorage.getItem('token');
      this._service.GetTrainingByMentor(this.id).subscribe(k=>this.list=k);
     }
     ngOnInit() {
    }
  }
  
