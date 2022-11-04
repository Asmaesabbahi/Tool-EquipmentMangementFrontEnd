import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Administrator } from 'src/app/admin';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.css']
})
export class AdminTableComponent implements OnInit {

  public admins: Administrator[] = [];
  constructor(private router: Router,private adminService : AdminService) { }

  ngOnInit(): void {
    this.getAdmins();
    document.getElementById('myModal')?.setAttribute('data-dismiss','modal');
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

  public detailsAdmin(id?: number){
    this.router.navigate(['/admindetails', id]);
    
  }

}
