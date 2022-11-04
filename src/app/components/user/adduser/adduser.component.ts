import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Administrator } from 'src/app/admin';
import { AdminService } from 'src/app/services/admin.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

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
  user : User = new User();
  constructor( private adminService : AdminService, public formBuilder: FormBuilder,private router: Router,private route: ActivatedRoute,private userService : UserService) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required]],
      tele : ['', [Validators.required]],
      post : ['', [Validators.required]]
    }) 
    this.did  = this.route.snapshot.params['id'];
    this.username = sessionStorage.getItem('username')!;
    this.password = sessionStorage.getItem('password')!;
    this.getAid();
  }

  showinfo(){
    console.log(sessionStorage.getItem('username'));
    console.log(sessionStorage.getItem('password'));
    console.log("print message");
    console.log(this.did, this.aid);
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

  addUser() {
    this.user.name = this.userForm.controls['name'].value;
    this.user.lasteName = this.userForm.controls['lastname'].value;
    this.user.tele = this.userForm.controls['tele'].value;
    this.user.email = this.userForm.controls['email'].value;
    this.user.poste = this.userForm.controls['post'].value;
    this.user.poste= this.post;
    this.userService.addUser(this.user,this.did, this.aid).subscribe(
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
