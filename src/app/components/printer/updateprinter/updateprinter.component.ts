import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { printer } from 'src/app/printer';
import { PrinterService } from 'src/app/services/printer.service';

@Component({
  selector: 'app-updateprinter',
  templateUrl: './updateprinter.component.html',
  styleUrls: ['./updateprinter.component.css']
})
export class UpdateprinterComponent implements OnInit {

  userForm!: FormGroup;
  brand : string = '';
  model : string = '';
  dateRequis! : Date;
  state : string = '';
  typeprinter! : string;
  etatToner! : string;
  id! : number;
  printer : printer = new printer();

  @Input() options2 = [
    { name: "Broken", value: "1" },
    { name: "Working", value: "2" }
  ]
  constructor(public formBuilder: FormBuilder,private router: Router, private route: ActivatedRoute, private printerService : PrinterService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.detailsPrinter();
    this.userForm = this.formBuilder.group({
      brand:  ['', [Validators.required]],
      model: ['', [Validators.required]],
      dateRequis: ['', [Validators.required]],
      state: ['', [Validators.required]],
      etatToner: ['', [Validators.required]],
      type: ['', [Validators.required]] 
  });
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

  updatePrinter() {
    if(this.userForm.controls['brand'].value!=""){this.printer.brand = this.userForm.controls['brand'].value;}
    if(this.userForm.controls['model'].value!=""){this.printer.model = this.userForm.controls['model'].value;}
    if(this.userForm.controls['type'].value!=""){this.printer.type = this.userForm.controls['type'].value;}
    if(this.userForm.controls['dateRequis'].value!=""){this.printer.dateRequis = this.userForm.controls['dateRequis'].value;}
    if(this.userForm.controls['state'].value!=""){this.printer.state = this.userForm.controls['state'].value;}
    if(this.userForm.controls['etatToner'].value!=""){this.printer.etatToner = this.userForm.controls['etatToner'].value;}
    this.printer.mid = this.id;

    this.printerService.updatePrinter(this.printer).subscribe(
      (response : printer)=>{
        if(response != null){
          this.router.navigate(['detailsprinter',this.id]);
        }
        else {
          console.log("failure");
        }
      }
    );
}

}
