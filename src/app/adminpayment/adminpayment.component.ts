import { Component, OnInit } from '@angular/core';
import { Cpayment } from '../models/cpayment';
import { PaymentService } from '../services/payment.service';

@Component({
  selector: 'app-adminpayment',
  templateUrl: './adminpayment.component.html',
  styleUrls: ['./adminpayment.component.css']
})
export class AdminpaymentComponent implements OnInit {
  item:Cpayment;
  list:Cpayment[];
  msg:string;

  constructor(private _service:PaymentService) {
    this.item=new Cpayment();
    this._service.GetPayment().subscribe(k=>this.list=k)
   }

  ngOnInit() {
  }
  // public Block(Id:number)
  // {
  //   this._service.Block(Id).subscribe(k=>this.msg);
  // }
  public DeletePayment(Id:number){
    this._service.DeletePayment(Id).subscribe(k=>k=this.msg)
  }

}
