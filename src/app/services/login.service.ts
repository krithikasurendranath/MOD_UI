import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  path:string="https://localhost:5005/api/Login"

  constructor(private _client:HttpClient) { }
  public Login(email,pwd):Observable<any>
  {
    return this._client.get<any>(this.path+'/Validate/'+email+'/'+pwd);

  }
}
