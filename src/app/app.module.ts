import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { AppComponent } from './app.component';
import {NgbdTabsetBasic} from './tabs/tabs.component';
import {AppUserComponent} from './User/app.user.component';
import {AppPlaylistsComponent} from './Playlists/app.playlists.component';



@NgModule({
  declarations: [
    AppComponent,
    NgbdTabsetBasic,
    AppUserComponent,
    AppPlaylistsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
