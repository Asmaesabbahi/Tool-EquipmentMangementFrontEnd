import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from 'src/app/dep';
import { DepService } from 'src/app/services/dep.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  public deps: Department[] = [];
  public users: User[] = [];
  public i :number = 0;
  public count : number[] = [2,3,1];
  constructor(private depService : DepService,private userService : UserService,private router: Router) { }

  ngOnInit(): void {
    this.getDeps();
    this.getUsers();
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

  public getDeps(): void{
    this.depService.getDeps().subscribe(
      (response : Department[])=>{
        this.deps = response;
        console.log(this.deps);
        console.log("this message")
      },
      (error : HttpErrorResponse)=> {
        alert(error.message);
      }
    );
  }

  public Usertable(id?: number){
    this.router.navigate(['/usertable', id]);
  }

}
