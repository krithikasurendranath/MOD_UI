import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Cuser} from '../Models/cuser'
import{ Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SuserService {
  path:string='https://localhost:5003/api/User';
  constructor(private _client:HttpClient){}
  public GetUser():Observable<Cuser[]>
  {
    return this._client.get<Cuser[]>(this.path+'/GetUser');
  }
  public Add(item:Cuser):Observable<string>{
    return this._client.post<string>(this.path+'/AddUser',item);
  }
  public Search(id:number):Observable<Cuser>{
    return this._client.get<Cuser>(this.path+'/GetUserById/'+id);
  }
  public Update(item:Cuser){
    return this._client.put(this.path+'/UpdateUser',item);
  }
  public Delete(id:number)
  {
    return this._client.delete(this.path+'/DeleteUser/'+id);
  }
  public Block(id:number)
      {
      return this._client.put(this.path+'/Block/'+id,id);
      }
      public Unblock(id:number)
      {
      return this._client.put(this.path+'/Unblock/'+id,id);
      }
 

}