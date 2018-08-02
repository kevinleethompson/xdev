import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'card',
	template: '<div class="card-container"> <ng-content></ng-content> </div>',
	styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

	@Input() post;

	constructor() { }

	ngOnInit() {
	}

}
