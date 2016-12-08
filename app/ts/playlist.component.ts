import {Component} from 'angular2/core';
import {Video} from './video';

@Component({
    selector: 'playlist',
    templateUrl: 'app/ts/playlist.component.html',
    inputs: ['videos']
})
export class PlaylistComponent{
	onSelect(vid:Video){
		videoCode:string ;
		constructor(){
			this.videoCode = "https://www.youtube.com/embed/"+vid.videoCode;
		}
	};
}