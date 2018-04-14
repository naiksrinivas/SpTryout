import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { AppComponent } from './app.component';
import {AppUserComponent} from './User/app.user.component';
import {AppPlaylistsComponent} from './Playlists/app.playlists.component';
import { SpotifyService } from './spotify.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { TrackComponent } from './track/track.component';


@NgModule({
  declarations: [
    AppComponent,    
    AppUserComponent,
    AppPlaylistsComponent,
    WelcomeComponent,
    TrackComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: 'user', component: AppUserComponent},
      {path: 'playlists', component: AppPlaylistsComponent},
      {path: 'track', component: TrackComponent},            
    ])
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
