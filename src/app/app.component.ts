import {Component, OnInit} from '@angular/core';
import {ApiService, Song}  from "./services/api.service";

@Component({
	selector   : 'app-root',
	templateUrl: './app.component.html',
	styleUrls  : ['./app.component.css']
})
export class AppComponent implements OnInit{
	
	songs:Song[] = []
	
	// DI
	constructor(private apiService: ApiService) {
		window['appComponent'] = window['appComponent'] || [];
		window['appComponent'].push(this)
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
