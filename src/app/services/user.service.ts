import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  public getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.apiServerUrl}/allUsers`);
  }

  public addUser(user : User,id : number, ida : number): Observable<User>{
    return this.http.post<User>(`${this.apiServerUrl}/${ida}/${id}/addUser`,user);
  }

  public updateUser(user : User,ida : number, id : number): Observable<User>{
    return this.http.put<User>(`${this.apiServerUrl}/${ida}/${id}/updateUser`,user);
  }

  public deleteUser(userId : number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/deleteUser/${userId}`);
  }

  public findUser(userId : number): Observable<User>{
    return this.http.get<User>(`${this.apiServerUrl}/findUser/${userId}`);
  }

}
