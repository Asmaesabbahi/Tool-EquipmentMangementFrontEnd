import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ecran } from 'src/app/ecran';
import { EcranService } from 'src/app/services/ecran.service';

@Component({
  selector: 'app-detailsecran',
  templateUrl: './detailsecran.component.html',
  styleUrls: ['./detailsecran.component.css']
})
export class DetailsecranComponent implements OnInit {

  ecran : ecran = new ecran();
  id!: number;

  constructor(private route: ActivatedRoute,private router: Router, private ecranService : EcranService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.detailsEcran();
  }

  detailsEcran(){
    this.ecranService.findEcran(this.id).subscribe(
      (response : ecran)=>{
        this.ecran = response;
      },
      (error : HttpErrorResponse)=> {
        alert(error.message);
      }
    );
  }

  deleteEcran(){
    this.ecranService.deleteEcran(this.id).subscribe( 
    (data) => {
      this.router.navigate(['/ecrantable']);
      document.getElementById('myModal')?.click();
    },
    (error : HttpErrorResponse)=> {
      alert(error.message);
    }
    )
  }

  updateEcran(){
    this.router.navigate(['/updateecran', this.id]);
  }

}
