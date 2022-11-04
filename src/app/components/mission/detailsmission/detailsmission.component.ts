import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { mission } from 'src/app/mission';
import { MissionService } from 'src/app/services/mission.service';

@Component({
  selector: 'app-detailsmission',
  templateUrl: './detailsmission.component.html',
  styleUrls: ['./detailsmission.component.css']
})
export class DetailsmissionComponent implements OnInit {

  id!: number;
  mission: mission = new mission();
  constructor(private route: ActivatedRoute,private router: Router, private missionService : MissionService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.detailsMission();
  }

  detailsMission(){
    this.missionService.findMission(this.id).subscribe(
      (response : mission)=>{
        this.mission = response;
      },
      (error : HttpErrorResponse)=> {
        alert(error.message);
      }
    );
  }

  deleteMission(){
    this.missionService.deleteMission(this.id).subscribe( 
    (data) => {
      this.router.navigate(['/missiontable']);
      document.getElementById('myModal')?.click();
    },
    (error : HttpErrorResponse)=> {
      alert(error.message);
    }
    )
  }

  updateMission(){
    this.router.navigate(['/updateAdmin', this.id]);
  }
}
