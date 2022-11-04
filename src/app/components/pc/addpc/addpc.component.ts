import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { pc } from 'src/app/pc';
import { PcService } from 'src/app/services/pc.service';

@Component({
  selector: 'app-addpc',
  templateUrl: './addpc.component.html',
  styleUrls: ['./addpc.component.css']
})
export class AddpcComponent implements OnInit {

  userForm!: FormGroup;
  brand : string = '';
  model : string = '';
  dateRequis! : Date;
  state : string = '';
  public typePC : string = '';
  osName : string = '';
  osVersion :string = '';
  osManufacterer : string = '';
  systemType :string = '';
  processorType :string = '';
  biosVersion :string = '';
  ram : string = '';
  disk : string = '';
  pc : pc = new pc();

  @Input() options = [
    { name: "Desktop", value: "1" },
    { name: "Client leger", value: "2" },
    { name: "Laptop", value: "3" }
  ];
  @Input() options2 = [
    { name: "Broken", value: "1" },
    { name: "Working", value: "2" }
  ];
  constructor( public formBuilder: FormBuilder,private router: Router, private pcService : PcService) { }

  ngOnInit(): void {

    this.userForm = this.formBuilder.group({
      brand:  ['', [Validators.required]],
      model: ['', [Validators.required]],
      dateRequis: ['', [Validators.required]],
      state: ['', [Validators.required]],
      osName : ['', [Validators.required]],
      osManufacterer: ['', [Validators.required]],
      osVersion: ['', [Validators.required]],
      processorType: ['', [Validators.required]],
      systemType: ['', [Validators.required]],
      ram: ['', [Validators.required]],
      disk: ['', [Validators.required]],
      typePC: ['', [Validators.required]],
      biosVersion: ['', [Validators.required]]
    })
  }

  addPc() {
    this.pc.biosVersion = this.userForm.controls['biosVersion'].value;
    this.pc.brand = this.userForm.controls['brand'].value;
    
    this.pc.disk = this.userForm.controls['disk'].value;
    this.pc.model = this.userForm.controls['model'].value;
    this.pc.osManufacterer = this.userForm.controls['osManufacterer'].value;
    this.pc.osVersion = this.userForm.controls['osVersion'].value;
    this.pc.processorType = this.userForm.controls['processorType'].value;
    this.pc.ram = this.userForm.controls['ram'].value;
    this.pc.dateRequis = this.userForm.controls['dateRequis'].value;
    this.pc.osName = this.userForm.controls['osName'].value;
    this.pc.systemType = this.userForm.controls['systemType'].value;
    this.pc.state = this.userForm.controls['state'].value;
    this.pc.typePC = this.userForm.controls['typePC'].value;

    this.pcService.addPc(this.pc).subscribe(
      (response : pc)=>{
        if(response != null){
          this.router.navigate(['pctable']);
        }
        else {
          console.log("failure");
        }
      }
    );
}

  

}
