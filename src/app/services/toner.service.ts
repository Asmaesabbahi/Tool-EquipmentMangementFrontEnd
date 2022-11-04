import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { toner } from '../toner';

@Injectable({
  providedIn: 'root'
})
export class TonerService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  public getToners(): Observable<toner[]>{
    return this.http.get<toner[]>(`${this.apiServerUrl}/allToners`);
  }

  public addToner(toner : toner): Observable<toner>{
    return this.http.post<toner>(`${this.apiServerUrl}/addToner`,toner);
  }

  public updateToner(toner : toner): Observable<toner>{
    return this.http.put<toner>(`${this.apiServerUrl}/updateToner`,toner);
  }

  public deleteToner(tonerId : number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/deleteToner/${tonerId}`);
  }

  public findToner(tonerId : number): Observable<toner>{
    return this.http.get<toner>(`${this.apiServerUrl}/findToner/${tonerId}`);
  }
}
