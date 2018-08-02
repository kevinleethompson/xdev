import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeModule } from './modules/home/home.module';
import { PostsModule } from './modules/posts/posts.module';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { SiteHeaderComponent } from './components/site-header/site-header.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
	declarations: [
		AppComponent,
		SiteHeaderComponent,
		PageNotFoundComponent
	],
	imports: [
		BrowserModule,
		HomeModule,
		PostsModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
