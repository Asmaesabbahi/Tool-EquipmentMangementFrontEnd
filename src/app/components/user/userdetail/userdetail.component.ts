import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {

  id! : number;
  did! : number;
  user : User = new User();

  constructor(private route: ActivatedRoute,private router: Router,private userservice : UserService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.did = this.route.snapshot.params['did'];
    this.detailsUser();
    
  }

  detailsUser(){
    this.userservice.findUser(this.id).subscribe(
      (response : User)=>{
        this.user = response;
      },
      (error : HttpErrorResponse)=> {
        alert(error.message);
      }
    );
  }

  deleteUser(){
    this.userservice.deleteUser(this.id).subscribe( 
    (data) => {
      this.router.navigate(['/departments']);
      document.getElementById('myModal')?.click();
    },
    (error : HttpErrorResponse)=> {
      alert(error.message);
    }
    )
  }

  public updateUser(){
    this.router.navigate(['/updateUser', this.did, this.id]);  
  }

  public addMateriel(){
    this.router.navigate(['/addmaterieluser',this.did,this.id]);  
  }

}
