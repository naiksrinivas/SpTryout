import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AppUserComponent} from './User/app.user.component';
import {AppPlaylistsComponent} from './Playlists/app.playlists.component';
import { SpotifyService } from './spotify.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { TrackComponent } from './track/track.component';
import { ChartsModule } from 'ng2-charts';


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
    ChartsModule,
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: 'user', component: AppUserComponent},
      {path: 'user/result/:result', component: AppUserComponent},
      {path: 'user/userId/:userId', component: AppUserComponent},
      {path: 'playlist/:id', component: AppPlaylistsComponent},
      {path: 'track/:id', component: TrackComponent},            
    ])
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
