import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Administrator } from 'src/app/admin';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']
})
export class UpdateAdminComponent implements OnInit {

  id! : number;
  admin : Administrator = new Administrator();
  userForm!: FormGroup;
  constructor(public formBuilder: FormBuilder, private route: ActivatedRoute,private router: Router,private adminService : AdminService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.detailsAdmin();
    this.userForm = this.formBuilder.group({
      permission: this.formBuilder.array([]),
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required]],
      tele : ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      checkbox1: ['', [Validators.required]],
      checkbox2: ['', [Validators.required]]
    })
  }

  detailsAdmin(){
    this.adminService.findAdmin(this.id).subscribe(
      (response : Administrator)=>{
        this.admin = response;
      },
      (error : HttpErrorResponse)=> {
        alert(error.message);
      }
    );
  }

  updateAdmin() {
    if(this.userForm.controls['name'].value!="") {this.admin.aname = this.userForm.controls['name'].value;}
    if(this.userForm.controls['lastname'].value!="") {this.admin.alasteName = this.userForm.controls['lastname'].value;}
    if(this.userForm.controls['tele'].value!="") {this.admin.atele = this.userForm.controls['tele'].value;}
    if(this.userForm.controls['email'].value!="") {this.admin.aemail = this.userForm.controls['email'].value;}
    if(this.userForm.controls['username'].value!="") {this.admin.ausername= this.userForm.controls['username'].value;}
    if(this.userForm.controls['password'].value!="") {this.admin.apassword = this.userForm.controls['password'].value;}
    this.admin.permission = "Lecture";
    this.admin.aid = this.id;
    this.adminService.updateAdmin(this.admin).subscribe(
      (response : Administrator)=>{
        if(response != null){
          this.router.navigate(['admintable']);
        }
        else {
          console.log("failure");
        }
      }
    );
}


}
