import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ecran } from 'src/app/ecran';
import { EcranService } from 'src/app/services/ecran.service';

@Component({
  selector: 'app-ecrantable',
  templateUrl: './ecrantable.component.html',
  styleUrls: ['./ecrantable.component.css']
})
export class EcrantableComponent implements OnInit {

  ecrans : ecran[] = [];

  constructor(private ecranService : EcranService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.getEcrans();
  }

  public getEcrans(): void{
    this.ecranService.getEcrans().subscribe(
      (response : ecran[])=>{
        this.ecrans = response;
      },
      (error : HttpErrorResponse)=> {
        alert(error.message);
      }
    );
  }

  public detailsecran(id?: number){
    this.router.navigate(['/detailsecran', id]);  
  }

}
