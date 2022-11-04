import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {

  did! :number;
  public users: User[] = [];

  constructor(private userService : UserService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.did  = this.route.snapshot.params['id'];
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

  public detailsUser(id?: number){
    this.router.navigate(['/userdetails',this.did, id]);  
  }

  public addUser(){
    this.router.navigate(['/addUser', this.did]);  
  }


}
