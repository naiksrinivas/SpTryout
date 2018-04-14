import {Component} from '@angular/core';
import { templateSourceUrl } from '@angular/compiler';
import { SpotifyService } from '../spotify.service';

@Component({
    templateUrl : "app.user.component.html",
    selector: "app-user"
})
export class AppUserComponent{

    constructor(private _spotifyService: SpotifyService){
    }
        
    data = {        
      }


      loadUserData(): void{
        this._spotifyService.getUser().subscribe(
          data => {
            console.log(data);
            this.data = data.data.body;
          }
        )        
      }


}