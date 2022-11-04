import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Department } from '../dep';

@Injectable({
  providedIn: 'root'
})
export class DepService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getDeps(): Observable<Department[]>{
    return this.http.get<Department[]>(`${this.apiServerUrl}/allDeps`);
  }

  public addDep(dep : Department): Observable<Department>{
    return this.http.post<Department>(`${this.apiServerUrl}//addDep`,dep);
  }

  public updateDep(dep : Department): Observable<Department>{
    return this.http.put<Department>(`${this.apiServerUrl}/updateDep`,dep);
  }

  public deleteDep(depId : number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/deleteDep/${depId}`);
  }
}
