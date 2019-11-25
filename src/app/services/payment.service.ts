import { Injectable } from '@angular/core';
import { Cpayment } from '../models/cpayment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

    path:string='https://localhost:5004/api/Payment';
  
    constructor(private _client:HttpClient) { }
    public GetPayment():Observable<Cpayment[]>
    {
      return this._client.get<Cpayment[]>(this.path+'/GetPayment');
    }
    public AddPayment(item:Cpayment):Observable<string>{
      return this._client.post<string>(this.path+'/AddPayment',item);
    }
    public SearchPayment(id:number):Observable<Cpayment>{
      return this._client.get<Cpayment>(this.path+'/GetPaymentById/'+id);
    }
    public UpdatePayment(item:Cpayment){
      return this._client.put(this.path+'/UpdatePayment',item);
    }
    public DeletePayment(id:number)
    {
      return this._client.delete(this.path+'/Delete/'+id);
    }
  
  }
  