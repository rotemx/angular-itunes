import {Injectable} from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class StateManagementService {
	
	constructor() {
		window['state'] = this
	}
	
	counter: number = 0;
	
	fruits: string[] = []
	
	myTitle = "Hello World !"
	
	increment() {
		this.counter++
		
	}
}
