import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { pc } from '../pc';

@Injectable({
  providedIn: 'root'
})
export class PcService {

      private apiServerUrl = environment.apiBaseUrl;
      constructor(private http: HttpClient) { }

      public getPcs(): Observable<pc[]>{
        return this.http.get<pc[]>(`${this.apiServerUrl}/allPcs`);
      }

      public addPc(pc : pc): Observable<pc>{
        return this.http.post<pc>(`${this.apiServerUrl}/addPc`,pc);
      }

      public updatePc(pc : pc): Observable<pc>{
        return this.http.put<pc>(`${this.apiServerUrl}/updatePc`,pc);
      }

      public updatePcwithUser(pc : pc,id : number): Observable<pc>{
        return this.http.put<pc>(`${this.apiServerUrl}/${id}/updateUser`,pc);
      }

      public deletePc(pcId : number): Observable<void>{
        return this.http.delete<void>(`${this.apiServerUrl}/deletePc/${pcId}`);
      }

      public findPc(pcId : number): Observable<pc>{
        return this.http.get<pc>(`${this.apiServerUrl}/findPc/${pcId}`);
      }
}
