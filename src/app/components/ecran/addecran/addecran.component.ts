import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ecran } from 'src/app/ecran';
import { EcranService } from 'src/app/services/ecran.service';

@Component({
  selector: 'app-addecran',
  templateUrl: './addecran.component.html',
  styleUrls: ['./addecran.component.css']
})
export class AddecranComponent implements OnInit {

  userForm!: FormGroup;
  brand : string = '';
  model : string = '';
  dateRequis! : Date;
  state : string = '';
  manufacturer : string ='';
  ecran : ecran = new ecran();
  @Input() options2 = [
    { name: "Broken", value: "1" },
    { name: "Working", value: "2" }
  ];
  constructor(public formBuilder: FormBuilder,private router: Router, private ecranService : EcranService) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      brand:  ['', [Validators.required]],
      model: ['', [Validators.required]],
      dateRequis: ['', [Validators.required]],
      state: ['', [Validators.required]],
      manufacturer: ['', [Validators.required]]
      
  });
  }

  addEcran() {
    this.ecran.brand = this.userForm.controls['brand'].value;
    this.ecran.model = this.userForm.controls['model'].value;
    this.ecran.manufacturer = this.userForm.controls['manufacturer'].value;
    this.ecran.dateRequis = this.userForm.controls['dateRequis'].value;
    this.ecran.state = this.userForm.controls['state'].value;


    this.ecranService.addEcran(this.ecran).subscribe(
      (response : ecran)=>{
        if(response != null){
          this.router.navigate(['ecrantable']);
        }
        else {
          console.log("failure");
        }
      }
    );
}
}
