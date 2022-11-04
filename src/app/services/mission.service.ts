import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { mission } from '../mission';

@Injectable({
  providedIn: 'root'
})
export class MissionService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  public getMissions(): Observable<mission[]>{
    return this.http.get<mission[]>(`${this.apiServerUrl}/allMissions`);
  }

  public addMission(mission : mission): Observable<mission>{
    return this.http.post<mission>(`${this.apiServerUrl}/addMission`,mission);
  }

  public updateMission(mission : mission): Observable<mission>{
    return this.http.put<mission>(`${this.apiServerUrl}/updateMission`,mission);
  }

  public deleteMission(missionId : number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/deleteMission/${missionId}`);
  }

  public findMission(missionId : number): Observable<mission>{
    return this.http.get<mission>(`${this.apiServerUrl}/findMission/${missionId}`);
  }

}
