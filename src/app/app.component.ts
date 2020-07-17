import {Component}        from '@angular/core';
import {ApiService, Song} from "./services/api.service";

@Component({
	selector   : 'app-root',
	templateUrl: './app.component.html',
	styleUrls  : ['./app.component.css']
})
export class AppComponent {
	
	songs:Song[] = []
	
	// DI
	constructor(private apiService: ApiService) {
	}
	
	title = 'MyFirstAngularProject';
	
	showHello() {
		// this.apiService
	}
	
	
	ngOnInit(){  // Lifecycle hook
		this.songs = this.apiService.getSongs()
	}
	onPlay(event:string){
		alert(event + ' Has been played!')
	}
}
