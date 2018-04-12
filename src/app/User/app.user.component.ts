import {Component} from '@angular/core';
import { templateSourceUrl } from '@angular/compiler';

@Component({
    templateUrl : "app.user.component.html",
    selector: "app-user"
})
export class AppUserComponent{

    data = {
        "birthdate": "1989-01-01",
        "country": "US",
        "display_name": null,
        "email": "srinivas.naik@live.com",
        "external_urls": {
          "spotify": "https://open.spotify.com/user/srinivasnaik2"
        },
        "followers": {
          "href": null,
          "total": 26
        },
        "href": "https://api.spotify.com/v1/users/srinivasnaik2",
        "id": "srinivasnaik2",
        "images": [
          {
            "height": null,
            "url": "https://profile-images.scdn.co/images/userprofile/default/b14cf28d42e64431ecffbf8a2e5da2d6b661a3c8",
            "width": null
          }
        ],
        "product": "premium",
        "type": "user",
        "uri": "spotify:user:srinivasnaik2"
      }
}