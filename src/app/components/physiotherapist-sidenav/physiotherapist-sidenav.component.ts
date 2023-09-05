import { Component, OnInit } from '@angular/core';
import {physiotherapistSidenavMenuData} from "./physiotherapistSidenavMenuData";

@Component({
  selector: 'app-physiotherapist-sidenav',
  templateUrl: './physiotherapist-sidenav.component.html',
  styleUrls: ['./physiotherapist-sidenav.component.css']
})
export class PhysiotherapistSidenavComponent implements OnInit {

  sidenavData = physiotherapistSidenavMenuData;

  isExpanded = false;

  constructor() { }

  ngOnInit(): void {
  }

}
