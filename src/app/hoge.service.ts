import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HogeService {

	constructor() { }
	public out(): String {
		console.log('this is HogeService.');
		return 'some string from hoge service instance injected!'
  }
}
