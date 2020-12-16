import { Component } from '@angular/core';
import { HogeService } from './hoge.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [HogeService]
})
export class AppComponent {
	title = 'my-angular';
	constructor(
    private h: HogeService,
  ) { }
	public callHoge(): String {
		return this.h.out();
	}
}
