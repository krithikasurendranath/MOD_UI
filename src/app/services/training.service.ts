import { Injectable } from '@angular/core';
import { Ctraining } from '../models/ctraining';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  path:string='https://localhost:5002/api/Training';

  constructor(private _client:HttpClient) { }
  public GetTraining():Observable<Ctraining[]>
  {
    return this._client.get<Ctraining[]>(this.path+'/GetTraining');
  }
  public AddTraining(item:Ctraining):Observable<string>{
    return this._client.post<string>(this.path+'/AddTraining',item);
  }
  public SearchTraining(id:number):Observable<Ctraining>{
    return this._client.get<Ctraining>(this.path+'/GetTrainingById/'+id);
  }
  public UpdateTraining(item:Ctraining){
    return this._client.put(this.path+'/UpdateTraining',item);
  }
  public DeleteTraining(id:number)
  {
    return this._client.delete(this.path+'/DeleteTraining/'+id);
  }
  public GetTrainingByUser(id :number):Observable<Ctraining[]>
  { 
      return this._client.get<Ctraining[]>(this.path+'/GetTrainingByUser/'+id);
  }
  public GetTrainingByMentor(id :number):Observable<Ctraining[]>
  { 
      return this._client.get<Ctraining[]>(this.path+'/GetTrainingByMentor/'+id);
  }

}
