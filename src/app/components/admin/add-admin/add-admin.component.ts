import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';  
import { Router } from '@angular/router';
import { Administrator } from 'src/app/admin';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {

  permissions: any = [
    {id : 1, name : 'Ecriture' },
    {id : 2, name : 'Lecture' }
  ];
  userForm!: FormGroup;
  name : string = '';
  lastname : string = '';
  email : string = '';
  tele : string = '';
  username: string = '';
  password: string = '';
  admin : Administrator = new Administrator;

  constructor(public formBuilder: FormBuilder,private router: Router, private adminService : AdminService) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      permission: this.formBuilder.array([]),
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required]],
      tele : ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      permissions: ['', [Validators.required]]
    })
    
  }

  addAdmin() {
    this.admin.aname = this.userForm.controls['name'].value;
    this.admin.alasteName = this.userForm.controls['lastname'].value;
    this.admin.atele = this.userForm.controls['tele'].value;
    this.admin.aemail = this.userForm.controls['email'].value;
    this.admin.ausername= this.userForm.controls['username'].value;
    this.admin.apassword = this.userForm.controls['password'].value;
    this.admin.permission = "Lecture";
    this.adminService.addAdmin(this.admin).subscribe(
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

  /*onCheckboxChange(e : any) {
    const permission: FormArray = this.userForm.controls['permission'] as FormArray;
    const ischecked = (<HTMLInputElement>e.target).checked
    const target = e.target as HTMLInputElement 
    if (ischecked) {
      permission.push(new FormControl(target.value));
    } else {
       const index = permission.controls.findIndex(x => x.value === target.value);
       permission.removeAt(index);
    }
  }

  submit(){
    console.log(this.userForm.value);
  }*/
}
