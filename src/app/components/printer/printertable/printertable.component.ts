import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { printer } from 'src/app/printer';
import { PrinterService } from 'src/app/services/printer.service';

@Component({
  selector: 'app-printertable',
  templateUrl: './printertable.component.html',
  styleUrls: ['./printertable.component.css']
})
export class PrintertableComponent implements OnInit {

  printers : printer[] = [];
  constructor(private PrinterService : PrinterService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.getPrinters();
  }

  public getPrinters(): void{
    this.PrinterService.getPrinters().subscribe(
      (response : printer[])=>{
        this.printers = response;
      },
      (error : HttpErrorResponse)=> {
        alert(error.message);
      }
    );
  }

  public detailsprinter(id?: number){
    this.router.navigate(['/detailsprinter', id]);  
  }

}
