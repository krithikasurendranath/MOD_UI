import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, Validators } from '@angular/forms';
import { Cmentor } from 'src/app/models/cmentor';
import { SmentorService } from 'src/app/services/smentor.service';

@Component({
  selector: 'app-mentorsignup',
  templateUrl: './mentorsignup.component.html',
  styleUrls: ['./mentorsignup.component.css']
})
export class MentorsignupComponent implements OnInit {
  // email2=new FormControl('',[
  //   Validators.required,
  //   Validators.email
 // ]);
 item:Cmentor;
  list:Cmentor[];
  msg:string;


  
  // mentor_name="";
  // pass_word="";
  // pass_word1="";
  // time="";
  // time1="";
  // lot="";
  // num="";
  // exp="";
  // fapro="";
  // liurl="";
  // message='';
  constructor(private _service:SmentorService) { 
    this.item=new Cmentor();
    this._service.GetAll().subscribe(k=>this.list=k)
  }

  ngOnInit() {
  }
  public Add(){
    this.item.mactive=true;
  this._service.Add(this.item).subscribe(k=>this.msg=k)
  }
  public Search(){
    this._service.Search(this.item.mid).subscribe(k=>this.item=k)
    console.log(this.item);
  }
  public Update(){
    this._service.Update(this.item).subscribe(k=>k=this.msg)
  }
  public Delete()
  {
    this._service.Delete(this.item.mid).subscribe(k=>k=this.msg)
  }

}
