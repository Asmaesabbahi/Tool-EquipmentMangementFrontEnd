import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';
declare var openNav: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private authentocationService: AuthentificationService, private router: Router) { }

  ngOnInit(): void {
    new openNav();
  }

  Logout(){
    this.authentocationService.logOut();
    this.router.navigate(['']);
  }

}
