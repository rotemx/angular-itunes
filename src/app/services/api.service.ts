import {Injectable}     from '@angular/core';

export interface Song {
	name: string
	artist: string
}

@Injectable({
	providedIn: 'root'
})
export class ApiService {
	
	constructor() {
	}
	
	getHello() {
		return 'Hello, World'
	}
	
	getSongs(): Song[] {
		return [
			{
				name  : 'Wish you Were Here',
				artist: 'Pink Floyd'
			},
			{
				name  : "Don't call me mamy",
				artist: "Mor"
			}]
	}
}
