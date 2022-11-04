import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { printer } from '../printer';

@Injectable({
  providedIn: 'root'
})
export class PrinterService {

  private apiServerUrl = environment.apiBaseUrl;
      constructor(private http: HttpClient) { }

      public getPrinters(): Observable<printer[]>{
        return this.http.get<printer[]>(`${this.apiServerUrl}/allPrinters`);
      }

      public addPrinter(printer : printer): Observable<printer>{
        return this.http.post<printer>(`${this.apiServerUrl}/addPrinter`,printer);
      }

      public updatePrinter(printer : printer): Observable<printer>{
        return this.http.put<printer>(`${this.apiServerUrl}/updatePrinter`,printer);
      }

      /*public updatePcwithUser(pc : pc,id : number): Observable<pc>{
        return this.http.put<pc>(`${this.apiServerUrl}/${id}/updateUser`,pc);
      }*/

      public deletePrinter(printerId : number): Observable<void>{
        return this.http.delete<void>(`${this.apiServerUrl}/deletePrinter/${printerId}`);
      }

      public findPrinter(printerId : number): Observable<printer>{
        return this.http.get<printer>(`${this.apiServerUrl}/findPrinter/${printerId}`);
      }
}
