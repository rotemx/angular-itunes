import { Component, OnInit }    from '@angular/core';
import {StateManagementService} from "../../services/state-management.service";

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css']
})
export class CompBComponent implements OnInit {

  constructor(public state:StateManagementService) { }

  ngOnInit(): void {
  }

}
