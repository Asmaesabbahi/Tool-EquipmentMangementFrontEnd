import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TonerService } from 'src/app/services/toner.service';
import { toner } from 'src/app/toner';

@Component({
  selector: 'app-addtoner',
  templateUrl: './addtoner.component.html',
  styleUrls: ['./addtoner.component.css']
})
export class AddtonerComponent implements OnInit {

  userForm!: FormGroup;
  toner : toner = new toner()
  constructor(public formBuilder: FormBuilder,private router: Router, private tonerService : TonerService) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      Type:  ['', [Validators.required]],
      quantity: ['', [Validators.required]],
  });
  }

  addToner() {
    this.toner.type = this.userForm.controls['Type'].value;
    this.toner.quantity = this.userForm.controls['quantity'].value;


    this.tonerService.addToner(this.toner).subscribe(
      (response : toner)=>{
        if(response != null){
          this.router.navigate(['tonertable']);
        }
        else {
          console.log("failure");
        }
      }
    );
}

}
