import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    templateUrl : "app.user.component.html",
    selector: "app-user"
})
export class AppUserComponent{

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _spotifyService: SpotifyService){
  }

  ngOnInit() {
    const paramResult = this._route.snapshot.paramMap.get('result');
    console.log(paramResult);
    const paramUser = this._route.snapshot.paramMap.get('userId');
    if (paramResult == 'success') {
      const id = paramResult;
      this.loadUserInfo();      
    }
    else if(paramUser){      
      this.loadUserInfo();      
    }
    else{
      console.log('Something went wrong!');
    }
  }
        
    data = {        
      }
    
    playlistData = {      
    }

    loadUserInfo(): void{
      this.loadUserData();
      this.loadUserPlaylistData();
    }

      loadUserData(): void{
        this._spotifyService.getUser().subscribe(
          data => {
            console.log(data);
            this.data = data.data.body;
          }
        )        
      }

      loadUserPlaylistData(): void{
        this._spotifyService.getUserPlaylists().subscribe(
          data => {
            console.log(data);
            this.playlistData = data.data.body;
          }
        )        
      }


}