import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'post',
	templateUrl: './post.component.html',
	styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

	today: Date = new Date();

	markdown: string = `
		# Advanced Networking Commands in Oshnix 18.04

		__${this.today}__ Chundrick Opelslink

		Oshnix, the Linux-based OS created by OISL co-creator Markus Osh, has just released version 18.04.

		\`\`\` javascript
			const test = "hope this works";

			function works() {
				return true;
			}
		\`\`\`
	`;

	constructor() { }

	ngOnInit() {}

}
