import { Injectable } from '@angular/core';
import { HttpClient } from'@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getUser(): Observable<any>{{
    return this.http.get('http://localhost:3100/auth/userinfo');
  }}

  getPlaylistDetails(id: string): Observable<any>{
    return this.http.get('http://localhost:3100/auth/playlist?id=' + id);
  }

}
