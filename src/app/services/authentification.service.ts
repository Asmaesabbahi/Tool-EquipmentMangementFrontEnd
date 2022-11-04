import { Injectable } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Administrator } from 'src/app/admin';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { RepositionScrollStrategy } from '@angular/cdk/overlay';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private adminService : AdminService) { }

  authenticate(username : string , password : string) {
    /*var admin: Observable<Administrator> = null;// = this.adminService.adminLogIn(username,password);
    if(admin!=null){
      sessionStorage.setItem('username',username);
      sessionStorage.setItem('password',password);
      return true;
    }
    else return false;*/
    var admin = null;
    this.adminService.adminLogIn(username, password).subscribe(
      (response : Administrator)=>{
        admin = response;
      },
      (error: HttpErrorResponse) => {
        admin = null;
      }
    );
    if(admin!=null){
      sessionStorage.setItem('username',username);
      sessionStorage.setItem('password',password);
      return true;
    }
    else return false;
  }

  IsAlreadyLogged(username : string, password : string){
    let adminuser = sessionStorage.getItem('username');
    let adminpass = sessionStorage.getItem('password');
    if(adminuser == null || adminpass == null) return false;
    if(username == adminuser && password == adminpass ){
      return true; 
    }
    else return false; 
  }

  logOut(){
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('password');
  }
}
