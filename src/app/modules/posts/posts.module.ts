import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';

import { PostComponent } from './components/post/post.component';

@NgModule({
	imports: [
		CommonModule,
		MarkdownModule.forRoot()
	],
	declarations: [PostComponent],
	exports: [
		PostComponent
	]
})
export class PostsModule { }
