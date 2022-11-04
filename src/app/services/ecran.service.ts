import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ecran } from '../ecran';

@Injectable({
  providedIn: 'root'
})
export class EcranService {

  private apiServerUrl = environment.apiBaseUrl;
      constructor(private http: HttpClient) { }

      public getEcrans(): Observable<ecran[]>{
        return this.http.get<ecran[]>(`${this.apiServerUrl}/allEcrans`);
      }

      public addEcran(ecran : ecran): Observable<ecran>{
        return this.http.post<ecran>(`${this.apiServerUrl}/addEcran`,ecran);
      }

      public updateEcran(ecran : ecran): Observable<ecran>{
        return this.http.put<ecran>(`${this.apiServerUrl}/updateEcran`,ecran);
      }

      /*public updatePcwithUser(pc : pc,id : number): Observable<pc>{
        return this.http.put<pc>(`${this.apiServerUrl}/${id}/updateUser`,pc);
      }*/

      public deleteEcran(ecranId : number): Observable<void>{
        return this.http.delete<void>(`${this.apiServerUrl}/deleteEcran/${ecranId}`);
      }

      public findEcran(ecranId : number): Observable<ecran>{
        return this.http.get<ecran>(`${this.apiServerUrl}/findEcran/${ecranId}`);
      }
}
