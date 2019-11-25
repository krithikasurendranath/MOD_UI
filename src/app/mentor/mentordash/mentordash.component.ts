import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cmentor } from 'src/app/models/cmentor';
import { SmentorService } from 'src/app/services/smentor.service';

@Component({
  selector: 'app-mentordash',
  templateUrl: './mentordash.component.html',
  styleUrls: ['./mentordash.component.css']
})
export class MentordashComponent implements OnInit {
  id:number;
  item:Cmentor;
  Mname='';

  constructor(private router : Router,private _service:SmentorService) { 
    this.item = new Cmentor;
    this.id=+localStorage.getItem('token');
    this._service.Search(this.id).subscribe(k=>this.item=k);
    this.Mname=this.item.mname;
    console.log(this.Mname)
  }

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
