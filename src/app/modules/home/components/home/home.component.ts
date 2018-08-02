import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	private featuredPosts = [
			{
				title: "A Post",
				description: "This is the post's description",
				imgSource: "https://openclipart.org/download/280526/Computerprogrammer.svg",
				type: "article",
				author: "Fedley Queldpin"
			},
			{
				title: "Advanced Network Commands in Oshnix 18.04",
				description: "This is the post's description",
				imgSource: "https://www.comlinx.com.au/wp-content/uploads/2016/08/Comlinx_Elastic-Networks_2016-300x230.jpg",
				type: "article",
				author: "Chundrick Opelslink"
			},
			{
				title: "A Post",
				description: "This is the post's description",
				imgSource: "https://openclipart.org/download/280526/Computerprogrammer.svg",
				type: "article",
				author: "Fedley Queldpin"
			},
			{
				title: "Advanced Network Commands in Oshnix 18.04",
				description: "This is the post's description",
				imgSource: "https://www.comlinx.com.au/wp-content/uploads/2016/08/Comlinx_Elastic-Networks_2016-300x230.jpg",
				type: "article",
				author: "Chundrick Opelslink"
			},
			{
				title: "A Post",
				description: "This is the post's description",
				imgSource: "https://openclipart.org/download/280526/Computerprogrammer.svg",
				type: "article",
				author: "Fedley Queldpin"
			},
			{
				title: "Advanced Network Commands in Oshnix 18.04",
				description: "This is the post's description",
				imgSource: "https://www.comlinx.com.au/wp-content/uploads/2016/08/Comlinx_Elastic-Networks_2016-300x230.jpg",
				type: "article",
				author: "Chundrick Opelslink"
			},
			{
				title: "A Post",
				description: "This is the post's description",
				imgSource: "https://openclipart.org/download/280526/Computerprogrammer.svg",
				type: "article",
				author: "Fedley Queldpin"
			},
			{
				title: "Advanced Network Commands in Oshnix 18.04",
				description: "This is the post's description",
				imgSource: "https://www.comlinx.com.au/wp-content/uploads/2016/08/Comlinx_Elastic-Networks_2016-300x230.jpg",
				type: "article",
				author: "Chundrick Opelslink"
			}
	];

	constructor() { }

	ngOnInit() {

	}

}
