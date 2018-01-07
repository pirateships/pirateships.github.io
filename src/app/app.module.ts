import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PubNubAngular } from 'pubnub-angular2';

import { AppComponent } from './app.component';
import { SpriteComponent } from './components/sprite/sprite.component';

@NgModule( {
	declarations: [
		AppComponent,
        SpriteComponent
	],
	imports: [
		BrowserModule
	],
	providers: [ PubNubAngular ],
	bootstrap: [ AppComponent ]
} )
export class AppModule {
}
