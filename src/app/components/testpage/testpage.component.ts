import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Administrator } from 'src/app/admin';
import { Department } from 'src/app/dep';
import { AdminService } from 'src/app/services/admin.service';
import { DepService } from 'src/app/services/dep.service';
declare var getIdSelections: any;
declare var initTable: any;

@Component({
  selector: 'app-testpage',
  templateUrl: './testpage.component.html',
  styleUrls: ['./testpage.component.css']
})
export class TestpageComponent implements OnInit {

  public deps: Department[] = [];
  public admins: Administrator[] = [];
  constructor(private depService : DepService,private adminService : AdminService) { }

  ngOnInit(): void {
    this.getAdmins();
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
  
}
