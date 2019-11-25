import { Component, OnInit } from '@angular/core';
import { Ctechnology } from '../models/ctechnology';
import { TechnologyService } from '../services/technology.service';


@Component({
  selector: 'app-admintechnology',
  templateUrl: './admintechnology.component.html',
  styleUrls: ['./admintechnology.component.css']
})
export class AdmintechnologyComponent implements OnInit {
  item:Ctechnology;
  list:Ctechnology[];
  msg:string;
  addClick;
  constructor(private _service:TechnologyService) { 
    this.item=new Ctechnology();
    this._service.GetSkills().subscribe(k=>this.list=k);
    this.addClick=0;
    //console.log("asd");
    
  }

  ngOnInit() {
  }
  public add()
  {
    this.addClick=1;
  }
  public AddSkills()
  {
    this._service.AddSkills(this.item).subscribe(k=>this.msg=k)
  }

}
