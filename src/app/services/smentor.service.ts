import { Injectable } from '@angular/core';
import { Cmentor } from '../models/cmentor';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SmentorService {
  path:string='https://localhost:5003/api/Mentor';
  constructor(private _client:HttpClient){}
  
  public GetAll():Observable<Cmentor[]>
  {
    return this._client.get<Cmentor[]>(this.path+'/GetMentor');
  }
  public Add(item:Cmentor):Observable<string>{
    return this._client.post<string>(this.path+'/AddMentor',item);
  }
  public Search(id:number):Observable<Cmentor>{
    return this._client.get<Cmentor>(this.path+'/GetMentorById/'+id);
  }
  public Update(item:Cmentor){
    return this._client.put(this.path+'/UpdateMentor',item);
  }
  public Delete(id:number)
  {
    return this._client.delete(this.path+'/DeleteMentor/'+id);
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