import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Administrator } from 'src/app/admin';
import { AdminService } from 'src/app/services/admin.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  userForm!: FormGroup;
  name : string = '';
  lastname : string = '';
  email : string = '';
  tele : string = '';
  username : string = '';
  password : string = '';
  post : string = '';
  did! :number;
  aid! : number;
  id! : number;
  user : User = new User();
  constructor(private adminService : AdminService, public formBuilder: FormBuilder,private router: Router,private route: ActivatedRoute,private userService : UserService) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required]],
      tele : ['', [Validators.required]],
      poste : ['', [Validators.required]]
    }) 
    this.id = this.route.snapshot.params['id'];
    this.did  = this.route.snapshot.params['did'];
    this.username = sessionStorage.getItem('username')!;
    this.password = sessionStorage.getItem('password')!;
    this.getAid();
    this.detailsUser();
  }
  getAid() {
    this.adminService.adminLogIn(this.username, this.password).subscribe(
      (response : Administrator)=>{
        if(response != null){
          this.aid = response.aid!;
        }

      }
    );
}
detailsUser(){
  this.userService.findUser(this.id).subscribe(
    (response : User)=>{
      this.user = response;
    },
    (error : HttpErrorResponse)=> {
      alert(error.message);
    }
  );
}

updateAdmin() {
  if(this.userForm.controls['name'].value!="") {this.user.name = this.userForm.controls['name'].value;}
  if(this.userForm.controls['lastname'].value!="") {this.user.lasteName = this.userForm.controls['lastname'].value;}
  if(this.userForm.controls['tele'].value!="") {this.user.tele = this.userForm.controls['tele'].value;}
  if(this.userForm.controls['email'].value!="") {this.user.email = this.userForm.controls['email'].value;}
  if(this.userForm.controls['poste'].value!="") {this.user.poste = this.userForm.controls['poste'].value;}
  this.user.uid = this.id;
  this.userService.updateUser(this.user,this.aid, this.did).subscribe(
    (response : User)=>{
      if(response != null){
        this.router.navigate(['/usertable', this.did]);     
       }
      else {
        console.log("failure");
      }
    }
  );
}

}
