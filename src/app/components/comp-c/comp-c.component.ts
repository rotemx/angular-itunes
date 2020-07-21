import { Component, OnInit }    from '@angular/core';
import {StateManagementService} from "../../services/state-management.service";

@Component({
  selector: 'app-comp-c',
  templateUrl: './comp-c.component.html',
  styleUrls: ['./comp-c.component.css']
})
export class CompCComponent implements OnInit {

  constructor(public state:StateManagementService) {
  
  }

  ngOnInit(): void {
  }

}
