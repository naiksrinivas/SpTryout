import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    templateUrl : "app.playlists.component.html",
    selector: "app-playlists"
})
export class AppPlaylistsComponent implements OnInit{ 

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _spotifyService: SpotifyService){
  }

  id = '';

  data = {        
  }

  ngOnInit() {
    const param = this._route.snapshot.paramMap.get('id');
    if (param) {
      this.id = param;
      this.loadPlaylistData(this.id);      
    }
  }
  
  loadPlaylistData(id: string): void{
    this._spotifyService.getPlaylistDetails(id).subscribe(
      data => {
        console.log(data);
        this.data = data.data.body;
      }
    )        
  }

}