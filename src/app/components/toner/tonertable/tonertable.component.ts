import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TonerService } from 'src/app/services/toner.service';
import { toner } from 'src/app/toner';

@Component({
  selector: 'app-tonertable',
  templateUrl: './tonertable.component.html',
  styleUrls: ['./tonertable.component.css']
})
export class TonertableComponent implements OnInit {

  toners : toner[] = [];

  constructor(private tonerService : TonerService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.getToners();
  }

  public getToners(): void{
    this.tonerService.getToners().subscribe(
      (response : toner[])=>{
        this.toners = response;
      },
      (error : HttpErrorResponse)=> {
        alert(error.message);
      }
    );
  }

  public detailstoner(id?: number){
    this.router.navigate(['/detailstoner', id]);  
  }

}
