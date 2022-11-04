import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ecran } from 'src/app/ecran';
import { EcranService } from 'src/app/services/ecran.service';

@Component({
  selector: 'app-updateecran',
  templateUrl: './updateecran.component.html',
  styleUrls: ['./updateecran.component.css']
})
export class UpdateecranComponent implements OnInit {

  userForm!: FormGroup;
  brand : string = '';
  model : string = '';
  dateRequis! : Date;
  state : string = '';
  manufacturer : string ='';
  id! : number ;
  ecran : ecran = new ecran();
  @Input() options2 = [
    { name: "Broken", value: "1" },
    { name: "Working", value: "2" }
  ]
    
  constructor(public formBuilder: FormBuilder,private router: Router, private route: ActivatedRoute,private ecranService : EcranService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.detailsEcran();
    this.userForm = this.formBuilder.group({
      brand:  ['', [Validators.required]],
      model: ['', [Validators.required]],
      dateRequis: ['', [Validators.required]],
      state: ['', [Validators.required]],
      manufacturer: ['', [Validators.required]]
  });
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

  updateEcran() {
    if(this.userForm.controls['brand'].value!="") { this.ecran.brand = this.userForm.controls['brand'].value; }
    if(this.userForm.controls['model'].value!="") { this.ecran.model = this.userForm.controls['model'].value; }
    if(this.userForm.controls['manufacturer'].value!="") { this.ecran.manufacturer = this.userForm.controls['manufacturer'].value; }
    if(this.userForm.controls['dateRequis'].value!="") { this.ecran.dateRequis = this.userForm.controls['dateRequis'].value; }
    if(this.userForm.controls['state'].value!="") { this.ecran.state = this.userForm.controls['state'].value; }
    this.ecran.mid = this.id;

    this.ecranService.updateEcran(this.ecran).subscribe(
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
