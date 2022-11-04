import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { printer } from 'src/app/printer';
import { PrinterService } from 'src/app/services/printer.service';

@Component({
  selector: 'app-addprinter',
  templateUrl: './addprinter.component.html',
  styleUrls: ['./addprinter.component.css']
})
export class AddprinterComponent implements OnInit {

  userForm!: FormGroup;
  brand : string = '';
  model : string = '';
  dateRequis! : Date;
  state : string = '';
  typeprinter! : string;
  etatToner! : string;
  printer : printer = new printer();
  @Input() options2 = [
    { name: "Broken", value: "1" },
    { name: "Working", value: "2" }
  ];
  constructor(public formBuilder: FormBuilder,private router: Router, private printerService : PrinterService) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      brand:  ['', [Validators.required]],
      model: ['', [Validators.required]],
      dateRequis: ['', [Validators.required]],
      state: ['', [Validators.required]],
      etatToner: ['', [Validators.required]],
      type: ['', [Validators.required]]
      
  });
  }

  addPrinter() {
    this.printer.brand = this.userForm.controls['brand'].value;
    this.printer.model = this.userForm.controls['model'].value;
    this.printer.type = this.userForm.controls['type'].value;
    this.printer.dateRequis = this.userForm.controls['dateRequis'].value;
    this.printer.state = this.userForm.controls['state'].value;
    this.printer.etatToner = this.userForm.controls['etatToner'].value;


    this.printerService.addPrinter(this.printer).subscribe(
      (response : printer)=>{
        if(response != null){
          this.router.navigate(['printertable']);
        }
        else {
          console.log("failure");
        }
      }
    );
}

}
