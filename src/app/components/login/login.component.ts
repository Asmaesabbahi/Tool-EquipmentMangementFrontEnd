import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';  
import { Router } from '@angular/router';
import { Administrator } from 'src/app/admin';
import { AdminService } from 'src/app/services/admin.service';
import { AuthentificationService } from 'src/app/services/authentification.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  errorMsg: string ="";
  userForm!: FormGroup;
  username: string = '';
  password: string = '';
  invalidLogin :boolean = false;
  admin : Administrator = new Administrator();
  constructor(public formBuilder: FormBuilder, private router: Router, private adminService : AdminService, private authService : AuthentificationService) { }

  
  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      fusername: ['', [Validators.required]],
      fpassword: ['', [Validators.required]]
    }
    )  
  }

  get getControl(){
    return this.userForm.controls;
  }
 
  checkLogin() {
      this.adminService.adminLogIn(this.username, this.password).subscribe(
        (response : Administrator)=>{
          if(response != null){
            this.admin = response;
            sessionStorage.setItem('username', this.username);
            sessionStorage.setItem('password',this.password);
            this.router.navigate(['dashboard']);
            this.invalidLogin = false;
          }
          else this.invalidLogin = true;
          this.InvalidLogin();
        }
      );
  }
  
  InvalidLogin(){
    if(this.invalidLogin) this.errorMsg="**Invalid username or password" 
    else this.errorMsg=""}

}
