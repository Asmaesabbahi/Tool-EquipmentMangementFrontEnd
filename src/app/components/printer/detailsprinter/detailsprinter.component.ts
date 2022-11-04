import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { printer } from 'src/app/printer';
import { PrinterService } from 'src/app/services/printer.service';

@Component({
  selector: 'app-detailsprinter',
  templateUrl: './detailsprinter.component.html',
  styleUrls: ['./detailsprinter.component.css']
})
export class DetailsprinterComponent implements OnInit {

  printer : printer = new printer();
  id!: number;

  constructor(private route: ActivatedRoute,private router: Router, private printerService : PrinterService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.detailsPrinter();
  }

  detailsPrinter(){
    this.printerService.findPrinter(this.id).subscribe(
      (response : printer)=>{
        this.printer = response;
      },
      (error : HttpErrorResponse)=> {
        alert(error.message);
      }
    );
  }

  deletePrinter(){
    this.printerService.deletePrinter(this.id).subscribe( 
    (data) => {
      this.router.navigate(['/printertable']);
      document.getElementById('myModal')?.click();
    },
    (error : HttpErrorResponse)=> {
      alert(error.message);
    }
    )
  }

  updatePrinter(){
    this.router.navigate(['/updateprinter', this.id]);
  }

}
