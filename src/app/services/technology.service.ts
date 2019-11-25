import { Injectable } from '@angular/core';
import { Ctechnology } from '../models/ctechnology';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {
  path:string='https://localhost:5001/api/Skills';

  constructor(private _client:HttpClient) { }
  public GetSkills():Observable<Ctechnology[]>
  {
    return this._client.get<Ctechnology[]>(this.path+'/GetSkills');
  }
  public AddSkills(item:Ctechnology):Observable<string>{
    return this._client.post<string>(this.path+'/AddSkills',item);
  }
  public SearchSkills(id:number):Observable<Ctechnology>{
    return this._client.get<Ctechnology>(this.path+'/GetSkillsById/'+id);
  }
  public UpdateSkills(item:Ctechnology){
    return this._client.put(this.path+'/UpdateSkills',item);
  }
  public Delete(id:number)
  {
    return this._client.delete(this.path+'/Delete/'+id);
  }

}

