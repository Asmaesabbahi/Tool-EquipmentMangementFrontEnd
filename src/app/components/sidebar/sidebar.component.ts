import { Component, OnInit } from '@angular/core';
declare var closeNav: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
   new closeNav();
  }

}
