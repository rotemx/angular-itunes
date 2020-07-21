import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {StateManagementService}                                        from "../../services/state-management.service";

@Component({
	selector   : 'app-comp-a',
	templateUrl: './comp-a.component.html',
	styleUrls  : ['./comp-a.component.css']
})
export class CompAComponent implements OnInit {
	
	constructor(public state: StateManagementService,
	            public cdr: ChangeDetectorRef) {
		window['compA'] = this
	}
	
	ngOnInit(): void {
	}
	
	ngOnChanges() {
		console.log('ngOnChanges');
	}
}
