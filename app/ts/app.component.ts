import {Component} from 'angular2/core';
import {Config} from './config.service';
import {Video} from './video';
import {PlaylistComponent} from './playlist.component';
import {VideoComponent} from './video.component';

@Component({
	//tag name
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives:[PlaylistComponent,VideoComponent]
})

export class AppComponent {
	mainHeading = Config.MAIN_HEADING;
	videos:Array<Video>;

	constructor(){
		this.videos = [
		new Video(1,"Angular 2 tut","f8qBeaGe2S4","Blah"),
		new Video(2,"How to save a life","DF0zefuJ4Ys","blah 2"),
		]
	}
}
