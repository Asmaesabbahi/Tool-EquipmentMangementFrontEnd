import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { pc } from 'src/app/pc';
import { PcService } from 'src/app/services/pc.service';

@Component({
  selector: 'app-updatepc',
  templateUrl: './updatepc.component.html',
  styleUrls: ['./updatepc.component.css']
})
export class UpdatepcComponent implements OnInit {

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
  id! : number;
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
  constructor(public formBuilder: FormBuilder,private router: Router, private route: ActivatedRoute,private pcService : PcService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.detailsPc();
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

  updatePc() {
    if(this.userForm.controls['biosVersion'].value!=""){this.pc.biosVersion = this.userForm.controls['biosVersion'].value;}
    if(this.userForm.controls['brand'].value!=""){this.pc.brand = this.userForm.controls['brand'].value; } 
    if(this.userForm.controls['disk'].value!=""){this.pc.disk = this.userForm.controls['disk'].value;}
    if(this.userForm.controls['model'].value!=""){this.pc.model = this.userForm.controls['model'].value;}
    if(this.userForm.controls['osManufacterer'].value!=""){this.pc.osManufacterer = this.userForm.controls['osManufacterer'].value;}
    if(this.userForm.controls['osVersion'].value!=""){this.pc.osVersion = this.userForm.controls['osVersion'].value;}
    if(this.userForm.controls['processorType'].value!=""){this.pc.processorType = this.userForm.controls['processorType'].value;}
    if(this.userForm.controls['ram'].value!=""){this.pc.ram = this.userForm.controls['ram'].value;}
    if(this.userForm.controls['dateRequis'].value!=""){this.pc.dateRequis = this.userForm.controls['dateRequis'].value;}
    if(this.userForm.controls['osName'].value!=""){this.pc.osName = this.userForm.controls['osName'].value;}
    if(this.userForm.controls['systemType'].value!=""){this.pc.systemType = this.userForm.controls['systemType'].value;}
    if(this.userForm.controls['state'].value!=""){this.pc.state = this.userForm.controls['state'].value;}
    if(this.userForm.controls['typePC'].value!=""){this.pc.typePC = this.userForm.controls['typePC'].value;}
    this.pc.mid = this.id;
    this.pcService.updatePc(this.pc).subscribe(
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
