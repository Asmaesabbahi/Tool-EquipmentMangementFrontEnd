import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ecran } from 'src/app/ecran';
import { pc } from 'src/app/pc';
import { printer } from 'src/app/printer';
import { EcranService } from 'src/app/services/ecran.service';
import { PcService } from 'src/app/services/pc.service';
import { PrinterService } from 'src/app/services/printer.service';

@Component({
  selector: 'app-addmaterialuser',
  templateUrl: './addmaterialuser.component.html',
  styleUrls: ['./addmaterialuser.component.css']
})
export class AddmaterialuserComponent implements OnInit {

  userForm!: FormGroup;
  ecrans : ecran[] = [];
  pcs : pc[] = [];
  printers : printer[] = [];
  id! : number;
  did! : number;

  public materiel : string[] = [];

  constructor(private router: Router,private PrinterService : PrinterService,private pcService : PcService,public formBuilder: FormBuilder,private ecranService : EcranService,private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.did = this.route.snapshot.params['did'];
    this.userForm = this.formBuilder.group({
      computer:  ['', [Validators.required]],
      printer: ['', [Validators.required]],
      ecran: ['', [Validators.required]]
      
  });
  this.getEcrans();
  this.getPcs();
  this.getPrinters();
  }

  public getEcrans(): void{
    this.ecranService.getEcrans().subscribe(
      (response : ecran[])=>{
        this.ecrans = response;
      },
      (error : HttpErrorResponse)=> {
        alert(error.message);
      }
    );
  }

  public getPcs(): void{
    this.pcService.getPcs().subscribe(
      (response : pc[])=>{
        this.pcs = response;
      },
      (error : HttpErrorResponse)=> {
        alert(error.message);
      }
    );
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

  addMateriel(){
    this.materiel.push(this.userForm.controls['computer'].value);
    this.materiel.push(this.userForm.controls['printer'].value);
    this.materiel.push(this.userForm.controls['ecran'].value);

    this.router.navigate(['/table',this.did, this.id]);  
  }

}
