import { Component, OnInit }    from '@angular/core';
import {StateManagementService} from "../../services/state-management.service";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(public state:StateManagementService) { }

  ngOnInit(): void {
  }

}
