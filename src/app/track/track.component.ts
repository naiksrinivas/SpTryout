import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _spotifyService: SpotifyService){
  }

  ngOnInit() {
    const param = this._route.snapshot.paramMap.get('id');
    if (param) {
      const id = param;
      this.loadTrackData(id);
      this.loadTrackAudioFeaturesData(id);
    }
  }
  
  data = {
    "album": {
      "album_type": "compilation",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of"
          },
          "href": "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
          "id": "0LyfQWJT6nXafLPZqxe9Of",
          "name": "Various Artists",
          "type": "artist",
          "uri": "spotify:artist:0LyfQWJT6nXafLPZqxe9Of"
        }
      ],
      "available_markets": [
        "AD",
        "AR",
        "AT",
        "AU",
        "BE",
        "BG",
        "BO",
        "BR",
        "CA",
        "CH",
        "CL",
        "CO",
        "CR",
        "CY",
        "CZ",
        "DE",
        "DK",
        "DO",
        "EC",
        "EE",
        "ES",
        "FI",
        "FR",
        "GB",
        "GR",
        "GT",
        "HK",
        "HN",
        "HU",
        "ID",
        "IE",
        "IL",
        "IS",
        "IT",
        "JP",
        "LI",
        "LT",
        "LU",
        "LV",
        "MC",
        "MT",
        "MX",
        "MY",
        "NI",
        "NL",
        "NO",
        "NZ",
        "PA",
        "PE",
        "PH",
        "PL",
        "PT",
        "PY",
        "RO",
        "SE",
        "SG",
        "SK",
        "SV",
        "TH",
        "TR",
        "TW",
        "US",
        "UY",
        "VN",
        "ZA"
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/2ni91Enmppk7MZvrLSmrkf"
      },
      "href": "https://api.spotify.com/v1/albums/2ni91Enmppk7MZvrLSmrkf",
      "id": "2ni91Enmppk7MZvrLSmrkf",
      "images": [
        {
          "height": 576,
          "url": "https://i.scdn.co/image/a801b124c2281d44c1fb5fbd9f941ad46cf9edce",
          "width": 640
        },
        {
          "height": 270,
          "url": "https://i.scdn.co/image/f504b1c36b8a3a2e4b10bfbd3896f57388b27453",
          "width": 300
        },
        {
          "height": 58,
          "url": "https://i.scdn.co/image/3914ac94dace1468ae0fd547c35d415ba1b8eeb0",
          "width": 64
        }
      ],
      "name": "Omkara",
      "release_date": "2006-06-01",
      "release_date_precision": "day",
      "type": "album",
      "uri": "spotify:album:2ni91Enmppk7MZvrLSmrkf"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/3OLGltG8UPIea8sA4w0yg0"
        },
        "href": "https://api.spotify.com/v1/artists/3OLGltG8UPIea8sA4w0yg0",
        "id": "3OLGltG8UPIea8sA4w0yg0",
        "name": "Rahat Fateh Ali Khan",
        "type": "artist",
        "uri": "spotify:artist:3OLGltG8UPIea8sA4w0yg0"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/1JdHoZwkwOmX2Pl2iTwnzc"
        },
        "href": "https://api.spotify.com/v1/artists/1JdHoZwkwOmX2Pl2iTwnzc",
        "id": "1JdHoZwkwOmX2Pl2iTwnzc",
        "name": "Vishal Bhardwaj",
        "type": "artist",
        "uri": "spotify:artist:1JdHoZwkwOmX2Pl2iTwnzc"
      }
    ],
    "available_markets": [
      "AD",
      "AR",
      "AT",
      "AU",
      "BE",
      "BG",
      "BO",
      "BR",
      "CA",
      "CH",
      "CL",
      "CO",
      "CR",
      "CY",
      "CZ",
      "DE",
      "DK",
      "DO",
      "EC",
      "EE",
      "ES",
      "FI",
      "FR",
      "GB",
      "GR",
      "GT",
      "HK",
      "HN",
      "HU",
      "ID",
      "IE",
      "IL",
      "IS",
      "IT",
      "JP",
      "LI",
      "LT",
      "LU",
      "LV",
      "MC",
      "MT",
      "MX",
      "MY",
      "NI",
      "NL",
      "NO",
      "NZ",
      "PA",
      "PE",
      "PH",
      "PL",
      "PT",
      "PY",
      "RO",
      "SE",
      "SG",
      "SK",
      "SV",
      "TH",
      "TR",
      "TW",
      "US",
      "UY",
      "VN",
      "ZA"
    ],
    "disc_number": 1,
    "duration_ms": 322920,
    "explicit": false,
    "external_ids": {
      "isrc": "GBSGZ0700016"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/0mELPRLKHOvKUW52nr05v2"
    },
    "href": "https://api.spotify.com/v1/tracks/0mELPRLKHOvKUW52nr05v2",
    "id": "0mELPRLKHOvKUW52nr05v2",
    "is_local": false,
    "name": "Omkara",
    "popularity": 25,
    "preview_url": "https://p.scdn.co/mp3-preview/72dd008ce1da211edb40770e5c38408a8d15a3aa?cid=774b29d4f13844c495f206cafdad9c86",
    "track_number": 1,
    "type": "track",
    "uri": "spotify:track:0mELPRLKHOvKUW52nr05v2"
  };


  audioFeaturesData = {
    "danceability": 0.736,
    "energy": 0.703,
    "key": 7,
    "loudness": -10.431,
    "mode": 1,
    "speechiness": 0.0411,
    "acousticness": 0.215,
    "instrumentalness": 0.000378,
    "liveness": 0.0843,
    "valence": 0.754,
    "tempo": 98.014,
    "type": "audio_features",
    "id": "0mELPRLKHOvKUW52nr05v2",
    "uri": "spotify:track:0mELPRLKHOvKUW52nr05v2",
    "track_href": "https://api.spotify.com/v1/tracks/0mELPRLKHOvKUW52nr05v2",
    "analysis_url": "https://api.spotify.com/v1/audio-analysis/0mELPRLKHOvKUW52nr05v2",
    "duration_ms": 322920,
    "time_signature": 4
  };

  loadTrackData(id: string): void{
    this._spotifyService.getTrackDetails(id).subscribe(
      data => {
        console.log(data);
        this.data = data.data.body;
      }
    )        
  }
  
  loadTrackAudioFeaturesData(id: string): void{
    this._spotifyService.getTrackAudioFeaturesDetails(id).subscribe(
      data => {
        console.log(data);
        this.audioFeaturesData = data.data.body;
      }
    )        
  }


}
