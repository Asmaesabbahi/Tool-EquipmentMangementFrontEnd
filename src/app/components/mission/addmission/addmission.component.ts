import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Administrator } from 'src/app/admin';
import { mission } from 'src/app/mission';
import { AdminService } from 'src/app/services/admin.service';
import { EcranService } from 'src/app/services/ecran.service';
import { MissionService } from 'src/app/services/mission.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-addmission',
  templateUrl: './addmission.component.html',
  styleUrls: ['./addmission.component.css']
})
export class AddmissionComponent implements OnInit {

  userForm!: FormGroup;
  sender! : string;
  receiver! : string;
  receptiondate! : Date;
  sendingdate! : Date;
  title! : string;
  desciption! : string;
  steps! : string;
  state! : string;
  mission : mission = new mission();
  admins : Administrator[] = [];
  users : User[] = [];
  @Input() etats = [
    { name: "non resolu", value: "1" },
    { name: "resolu", value: "2" },
    { name: "en cours", value: "3" },
  ];
  constructor(public formBuilder: FormBuilder,private router: Router, private userService : UserService,private missionService : MissionService,private adminService : AdminService) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      receiver: ['', [Validators.required]],
      sender:  ['', [Validators.required]],
      receptiondate: ['', [Validators.required]],
      sendingdate: ['', [Validators.required]],
      title: ['', [Validators.required]],
      desciption: ['', [Validators.required]],
      steps: ['', [Validators.required]],
      state: ['', [Validators.required]]
      
  });
  this.getAdmins();
  this.getUsers();
  }

  public getAdmins(): void{
    this.adminService.getAdmins().subscribe(
      (response : Administrator[])=>{
        this.admins = response;
        console.log(this.admins);
      },
      (error : HttpErrorResponse)=> {
        alert(error.message);
      }
    );
  }

  public getUsers(): void{
    this.userService.getUsers().subscribe(
      (response : User[])=>{
        this.users = response;
      },
      (error : HttpErrorResponse)=> {
        alert(error.message);
      }
    );
  }

  addMission() {
    this.mission.desciption = this.userForm.controls['desciption'].value;
    this.mission.receiver = this.userForm.controls['receiver'].value;
    this.mission.receptiondate = this.userForm.controls['receptiondate'].value;
    this.mission.sender = this.userForm.controls['sender'].value;
    this.mission.state = "En cours"
    this.mission.sendingdate = this.userForm.controls['sendingdate'].value;
    this.mission.steps = "Diagnostic"
    this.mission.title = this.userForm.controls['title'].value;


    this.missionService.addMission(this.mission).subscribe(
      (response : mission)=>{
        if(response != null){
          this.router.navigate(['missiontable']);
        }
        else {
          console.log("failure");
        }
      }
    );
}

}
