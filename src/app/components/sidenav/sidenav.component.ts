import { Component, OnInit } from '@angular/core';
import { sidenavMenuData } from "./sidenavMenuData";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  sidenavData = sidenavMenuData;
  isExpanded = false;

  constructor() { }

  ngOnInit(): void {
  }

}
