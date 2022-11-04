import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { mission } from 'src/app/mission';
import { MissionService } from 'src/app/services/mission.service';

@Component({
  selector: 'app-missiontable',
  templateUrl: './missiontable.component.html',
  styleUrls: ['./missiontable.component.css']
})
export class MissiontableComponent implements OnInit {

  missions : mission[] = [];
  constructor(public formBuilder: FormBuilder,private router: Router,private missionService : MissionService) { }

  ngOnInit(): void {
    this.getMissions();
  }

  public getMissions(): void{
    this.missionService.getMissions().subscribe(
      (response : mission[])=>{
        this.missions = response;
      },
      (error : HttpErrorResponse)=> {
        alert(error.message);
      }
    );
  }

  public detailsmission(id?: number){
    this.router.navigate(['/detailsmission', id]);  
  }

}
