import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Administrator } from '../admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  public getAdmins(): Observable<Administrator[]>{
    return this.http.get<Administrator[]>(`${this.apiServerUrl}/allAdmins`);
  }

  public addAdmin(admin : Administrator): Observable<Administrator>{
    return this.http.post<Administrator>(`${this.apiServerUrl}/addAdmin`,admin);
  }

  public updateAdmin(admin : Administrator): Observable<Administrator>{
    return this.http.put<Administrator>(`${this.apiServerUrl}/updateAdmin`,admin);
  }

  public deleteAdmin(adminId : number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/deleteAdmin/${adminId}`);
  }

  public findAdmin(adminId : number): Observable<Administrator>{
    return this.http.get<Administrator>(`${this.apiServerUrl}/findAdmin/${adminId}`);
  }

  public adminLogIn(ausername : String, apassword : String): Observable<Administrator>{
    return this.http.get<Administrator>(`${this.apiServerUrl}/LoginAdmin/${ausername}/${apassword}`);
  }
}
