import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pc } from 'src/app/pc';
import { PcService } from 'src/app/services/pc.service';

@Component({
  selector: 'app-pctable',
  templateUrl: './pctable.component.html',
  styleUrls: ['./pctable.component.css']
})
export class PctableComponent implements OnInit {

  pcs : pc[] = [];
  constructor(private pcService : PcService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.getPcs();
  }

  public getPcs(): void{
    this.pcService.getPcs().subscribe(
      (response : pc[])=>{
        this.pcs = response;
      },
      (error : HttpErrorResponse)=> {
        alert(error.message);
      }
    );
  }

  public detailsPc(id?: number){
    this.router.navigate(['/pcdetails', id]);  
  }

}
