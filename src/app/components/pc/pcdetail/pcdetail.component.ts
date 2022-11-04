import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pc } from 'src/app/pc';
import { PcService } from 'src/app/services/pc.service';

@Component({
  selector: 'app-pcdetail',
  templateUrl: './pcdetail.component.html',
  styleUrls: ['./pcdetail.component.css']
})
export class PcdetailComponent implements OnInit {

  pc : pc = new pc();
  id!: number;

  constructor(private route: ActivatedRoute,private router: Router, private pcService : PcService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.detailsPc();
  }

  detailsPc(){
    this.pcService.findPc(this.id).subscribe(
      (response : pc)=>{
        this.pc = response;
      },
      (error : HttpErrorResponse)=> {
        alert(error.message);
      }
    );
  }

  deletePc(){
    this.pcService.deletePc(this.id).subscribe( 
    (data) => {
      this.router.navigate(['/pctable']);
      document.getElementById('myModal')?.click();
    },
    (error : HttpErrorResponse)=> {
      alert(error.message);
    }
    )
  }

  updatePc(){
    this.router.navigate(['/updatepc', this.id]);
  }

}
