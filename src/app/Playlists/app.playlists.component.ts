import {Component} from '@angular/core';
import { templateSourceUrl } from '@angular/compiler';
import { SpotifyService } from '../spotify.service';

@Component({
    templateUrl : "app.playlists.component.html",
    selector: "app-playlists"
})
export class AppPlaylistsComponent{ 

  constructor(private _spotifyService: SpotifyService){
  }

  data = {        
  }

  

  loadPlaylistData(): void{
    this._spotifyService.getPlaylistDetails('3mE5GAcrMSgpUk3qkYB5NB').subscribe(
      data => {
        console.log(data);
        this.data = data.data.body;
      }
    )        
  }

}