import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cmentor } from '../models/cmentor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  path: String = "https://localhost:5003/api/User"

  constructor(private _client : HttpClient) { }
    public SearchMentor(skills:string): Observable<Cmentor[]>
  {
    return this._client.get<Cmentor[]>(this.path+'/GetMskills/'+skills);
  }
}
