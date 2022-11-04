import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Administrator } from 'src/app/admin';
import { mission } from 'src/app/mission';
import { AdminService } from 'src/app/services/admin.service';
import { MissionService } from 'src/app/services/mission.service';

@Component({
  selector: 'app-details-admin',
  templateUrl: './details-admin.component.html',
  styleUrls: ['./details-admin.component.css']
})
export class DetailsAdminComponent implements OnInit {

  id!: number;
  admin: Administrator = new Administrator();
  missions : mission[] = [];
  missionsa : mission[] = [];
  isDeleted : boolean = false;

  constructor(private route: ActivatedRoute,private router: Router, private adminService : AdminService, private missionService : MissionService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.detailsAdmin();
    this.getMissions();
   // this.getMissiona();
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
  public getMissiona():void{
    for(let mission of this.missions){
      if(mission.receiver.includes("kawtara kawtara"))
          {this.missionsa.push(mission);
          console.log('plz');}
          else console.log('no');
    }
  }

  public getMissions(): void{
    this.missionService.getMissions().subscribe(
      (response : mission[])=>{
        this.missions = response;
        for(let mission of this.missions){
          if(mission.receiver.includes(this.admin.aname))
              {this.missionsa.push(mission);
              console.log('plz');}
              else console.log('no');
        }
      },
      (error : HttpErrorResponse)=> {
        alert(error.message);
      }
    );
  }

  deleteAdmin(){
    this.adminService.deleteAdmin(this.id).subscribe( 
    (data) => {
      this.router.navigate(['/admintable']);
      document.getElementById('myModal')?.click();
    },
    (error : HttpErrorResponse)=> {
      alert(error.message);
    }
    )
  }

  updateAdmin(){
    this.router.navigate(['/updateAdmin', this.id]);
  }
}
