import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from '../home/components/home/home.component';
import { PageNotFoundComponent } from '../../components/page-not-found/page-not-found.component';
import { PostComponent } from '../posts/components/post/post.component';

const appRoutes: Routes = [
	{ path: '', pathMatch: 'full', component: HomeComponent },
	{ path: 'post', component: PostComponent },
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forRoot(
			appRoutes,
			{ enableTracing: true } // <-- debugging purposes only
		)
	],
	declarations: [],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }
