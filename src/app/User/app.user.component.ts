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
    
    playlistData = {
      "href": "https://api.spotify.com/v1/users/srinivasnaik2/playlists?offset=0&limit=20",
      "items": [
        {
          "collaborative": false,
          "external_urls": {
            "spotify": "https://open.spotify.com/user/srinivasnaik2/playlist/448afXA6d1uP2qrq5r8A2n"
          },
          "href": "https://api.spotify.com/v1/users/srinivasnaik2/playlists/448afXA6d1uP2qrq5r8A2n",
          "id": "448afXA6d1uP2qrq5r8A2n",
          "images": [
            {
              "height": 640,
              "url": "https://mosaic.scdn.co/640/a07db417fe5bdebcf2d72a5df4b05a84b055b3e3a3dde97cd07f9945517353ee4a9f46e480b11c35b9f2b99f9a23e24f7cf31be203d7a137a87f37b7eefb7e364c3fef777eabbe5a600dc176fee045d3",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://mosaic.scdn.co/300/a07db417fe5bdebcf2d72a5df4b05a84b055b3e3a3dde97cd07f9945517353ee4a9f46e480b11c35b9f2b99f9a23e24f7cf31be203d7a137a87f37b7eefb7e364c3fef777eabbe5a600dc176fee045d3",
              "width": 300
            },
            {
              "height": 60,
              "url": "https://mosaic.scdn.co/60/a07db417fe5bdebcf2d72a5df4b05a84b055b3e3a3dde97cd07f9945517353ee4a9f46e480b11c35b9f2b99f9a23e24f7cf31be203d7a137a87f37b7eefb7e364c3fef777eabbe5a600dc176fee045d3",
              "width": 60
            }
          ],
          "name": "Espanol",
          "owner": {
            "display_name": null,
            "external_urls": {
              "spotify": "https://open.spotify.com/user/srinivasnaik2"
            },
            "href": "https://api.spotify.com/v1/users/srinivasnaik2",
            "id": "srinivasnaik2",
            "type": "user",
            "uri": "spotify:user:srinivasnaik2"
          },
          "primary_color": null,
          "public": true,
          "snapshot_id": "y5eyF814UAe3DtOnoSdvQJ8u6OdzWDGKzRVkbTkYstAhCAZ5QCUeXuusvnIu80g5",
          "tracks": {
            "href": "https://api.spotify.com/v1/users/srinivasnaik2/playlists/448afXA6d1uP2qrq5r8A2n/tracks",
            "total": 6
          },
          "type": "playlist",
          "uri": "spotify:user:srinivasnaik2:playlist:448afXA6d1uP2qrq5r8A2n"
        },
        {
          "collaborative": false,
          "external_urls": {
            "spotify": "https://open.spotify.com/user/srinivasnaik2/playlist/1yzhDWPxJFm75pfTG6P20N"
          },
          "href": "https://api.spotify.com/v1/users/srinivasnaik2/playlists/1yzhDWPxJFm75pfTG6P20N",
          "id": "1yzhDWPxJFm75pfTG6P20N",
          "images": [
            {
              "height": 640,
              "url": "https://mosaic.scdn.co/640/553e612f2197a565576b47eabc73dbc030f0a7966d2b0fdb91cd66595511c6c42263aab51c2882f3dacb401b802edf06d5c9beec0ba1adf7421c3a2afc80041468fe31e985cfb780bd0a1197c21eac8c",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://mosaic.scdn.co/300/553e612f2197a565576b47eabc73dbc030f0a7966d2b0fdb91cd66595511c6c42263aab51c2882f3dacb401b802edf06d5c9beec0ba1adf7421c3a2afc80041468fe31e985cfb780bd0a1197c21eac8c",
              "width": 300
            },
            {
              "height": 60,
              "url": "https://mosaic.scdn.co/60/553e612f2197a565576b47eabc73dbc030f0a7966d2b0fdb91cd66595511c6c42263aab51c2882f3dacb401b802edf06d5c9beec0ba1adf7421c3a2afc80041468fe31e985cfb780bd0a1197c21eac8c",
              "width": 60
            }
          ],
          "name": "Incubation",
          "owner": {
            "display_name": null,
            "external_urls": {
              "spotify": "https://open.spotify.com/user/srinivasnaik2"
            },
            "href": "https://api.spotify.com/v1/users/srinivasnaik2",
            "id": "srinivasnaik2",
            "type": "user",
            "uri": "spotify:user:srinivasnaik2"
          },
          "primary_color": null,
          "public": true,
          "snapshot_id": "fX+ul0H8nA4ykWX35k+y1PF+cVVcK8BLn4F88UjE9h8uznopJe7Z3V5lQvMdybRX",
          "tracks": {
            "href": "https://api.spotify.com/v1/users/srinivasnaik2/playlists/1yzhDWPxJFm75pfTG6P20N/tracks",
            "total": 352
          },
          "type": "playlist",
          "uri": "spotify:user:srinivasnaik2:playlist:1yzhDWPxJFm75pfTG6P20N"
        },
        {
          "collaborative": false,
          "external_urls": {
            "spotify": "https://open.spotify.com/user/srinivasnaik2/playlist/0xWyN7mAD5ipLKLX7Rd4kY"
          },
          "href": "https://api.spotify.com/v1/users/srinivasnaik2/playlists/0xWyN7mAD5ipLKLX7Rd4kY",
          "id": "0xWyN7mAD5ipLKLX7Rd4kY",
          "images": [
            {
              "height": 640,
              "url": "https://mosaic.scdn.co/640/1335c635305ca179c47caf4eb8b27c9cab16bdf9a3ea383f1248f88befd895926a9be10059cabb0fd19c4b6ee4ab3874ace420da8f034d5ec3b71d7afe905a991c52aed52442746132b50bcde0c68ac6",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://mosaic.scdn.co/300/1335c635305ca179c47caf4eb8b27c9cab16bdf9a3ea383f1248f88befd895926a9be10059cabb0fd19c4b6ee4ab3874ace420da8f034d5ec3b71d7afe905a991c52aed52442746132b50bcde0c68ac6",
              "width": 300
            },
            {
              "height": 60,
              "url": "https://mosaic.scdn.co/60/1335c635305ca179c47caf4eb8b27c9cab16bdf9a3ea383f1248f88befd895926a9be10059cabb0fd19c4b6ee4ab3874ace420da8f034d5ec3b71d7afe905a991c52aed52442746132b50bcde0c68ac6",
              "width": 60
            }
          ],
          "name": "New Finds",
          "owner": {
            "display_name": null,
            "external_urls": {
              "spotify": "https://open.spotify.com/user/srinivasnaik2"
            },
            "href": "https://api.spotify.com/v1/users/srinivasnaik2",
            "id": "srinivasnaik2",
            "type": "user",
            "uri": "spotify:user:srinivasnaik2"
          },
          "primary_color": null,
          "public": true,
          "snapshot_id": "md1zqAa8fAPaAXmSZ98saBskcJFx7teSSaOMsOda/SPHoujMaMlwDq+2mcGJM2gu",
          "tracks": {
            "href": "https://api.spotify.com/v1/users/srinivasnaik2/playlists/0xWyN7mAD5ipLKLX7Rd4kY/tracks",
            "total": 331
          },
          "type": "playlist",
          "uri": "spotify:user:srinivasnaik2:playlist:0xWyN7mAD5ipLKLX7Rd4kY"
        },
        {
          "collaborative": false,
          "external_urls": {
            "spotify": "https://open.spotify.com/user/srinivasnaik2/playlist/13TdANMicovWNxPESOC994"
          },
          "href": "https://api.spotify.com/v1/users/srinivasnaik2/playlists/13TdANMicovWNxPESOC994",
          "id": "13TdANMicovWNxPESOC994",
          "images": [
            {
              "height": 640,
              "url": "https://mosaic.scdn.co/640/14873c003110f250cf581cfa82706bd61b0be837453c602b12fec53b0e354ea6b5c67db87cdb15c9d13ca035618df2705c34b011db261551e016f8c6e13f2b6d4a80939f7136c4464a96457edc910ecf",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://mosaic.scdn.co/300/14873c003110f250cf581cfa82706bd61b0be837453c602b12fec53b0e354ea6b5c67db87cdb15c9d13ca035618df2705c34b011db261551e016f8c6e13f2b6d4a80939f7136c4464a96457edc910ecf",
              "width": 300
            },
            {
              "height": 60,
              "url": "https://mosaic.scdn.co/60/14873c003110f250cf581cfa82706bd61b0be837453c602b12fec53b0e354ea6b5c67db87cdb15c9d13ca035618df2705c34b011db261551e016f8c6e13f2b6d4a80939f7136c4464a96457edc910ecf",
              "width": 60
            }
          ],
          "name": "Shri",
          "owner": {
            "display_name": null,
            "external_urls": {
              "spotify": "https://open.spotify.com/user/srinivasnaik2"
            },
            "href": "https://api.spotify.com/v1/users/srinivasnaik2",
            "id": "srinivasnaik2",
            "type": "user",
            "uri": "spotify:user:srinivasnaik2"
          },
          "primary_color": null,
          "public": true,
          "snapshot_id": "MPckWFDB/aUe/BE5EFOakcR5hKdga4ri+fnGRAQPaDVtCs+cSAvPYRF1GMeuDnNt",
          "tracks": {
            "href": "https://api.spotify.com/v1/users/srinivasnaik2/playlists/13TdANMicovWNxPESOC994/tracks",
            "total": 25
          },
          "type": "playlist",
          "uri": "spotify:user:srinivasnaik2:playlist:13TdANMicovWNxPESOC994"
        },
        {
          "collaborative": false,
          "external_urls": {
            "spotify": "https://open.spotify.com/user/srinivasnaik2/playlist/3SMJ4LQDA5cNaxsw41iycu"
          },
          "href": "https://api.spotify.com/v1/users/srinivasnaik2/playlists/3SMJ4LQDA5cNaxsw41iycu",
          "id": "3SMJ4LQDA5cNaxsw41iycu",
          "images": [
            {
              "height": 640,
              "url": "https://mosaic.scdn.co/640/0765b9496f62c25b808d06c14a156e41d3d32689110d19fa467ba7e2605d6d4f4cdd826efa2fc1cb14873c003110f250cf581cfa82706bd61b0be83758aabf386a43d63838a7338aea25b21f85780d43",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://mosaic.scdn.co/300/0765b9496f62c25b808d06c14a156e41d3d32689110d19fa467ba7e2605d6d4f4cdd826efa2fc1cb14873c003110f250cf581cfa82706bd61b0be83758aabf386a43d63838a7338aea25b21f85780d43",
              "width": 300
            },
            {
              "height": 60,
              "url": "https://mosaic.scdn.co/60/0765b9496f62c25b808d06c14a156e41d3d32689110d19fa467ba7e2605d6d4f4cdd826efa2fc1cb14873c003110f250cf581cfa82706bd61b0be83758aabf386a43d63838a7338aea25b21f85780d43",
              "width": 60
            }
          ],
          "name": "Hanuman Chalisa Good",
          "owner": {
            "display_name": null,
            "external_urls": {
              "spotify": "https://open.spotify.com/user/srinivasnaik2"
            },
            "href": "https://api.spotify.com/v1/users/srinivasnaik2",
            "id": "srinivasnaik2",
            "type": "user",
            "uri": "spotify:user:srinivasnaik2"
          },
          "primary_color": null,
          "public": true,
          "snapshot_id": "3abSJXjKmos1s43hsHWeuujT6KIJvuaknGZVoubDKouRRJ22siskFCuQqGtTmCyp",
          "tracks": {
            "href": "https://api.spotify.com/v1/users/srinivasnaik2/playlists/3SMJ4LQDA5cNaxsw41iycu/tracks",
            "total": 12
          },
          "type": "playlist",
          "uri": "spotify:user:srinivasnaik2:playlist:3SMJ4LQDA5cNaxsw41iycu"
        },
        {
          "collaborative": false,
          "external_urls": {
            "spotify": "https://open.spotify.com/user/srinivasnaik2/playlist/1nrs5ubGU7sV9OisgE9jNh"
          },
          "href": "https://api.spotify.com/v1/users/srinivasnaik2/playlists/1nrs5ubGU7sV9OisgE9jNh",
          "id": "1nrs5ubGU7sV9OisgE9jNh",
          "images": [
            {
              "height": 640,
              "url": "https://mosaic.scdn.co/640/1147c089a2a0798e3e422bf62f70a5c6e7d837f643001046617a94bb9d050fd64446bf6826ca73b7e3efa98d409c8f9fe86f3a5f0e5d22813badc569fca8acabc7feecd745c440da1c5f20cd474ebe97",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://mosaic.scdn.co/300/1147c089a2a0798e3e422bf62f70a5c6e7d837f643001046617a94bb9d050fd64446bf6826ca73b7e3efa98d409c8f9fe86f3a5f0e5d22813badc569fca8acabc7feecd745c440da1c5f20cd474ebe97",
              "width": 300
            },
            {
              "height": 60,
              "url": "https://mosaic.scdn.co/60/1147c089a2a0798e3e422bf62f70a5c6e7d837f643001046617a94bb9d050fd64446bf6826ca73b7e3efa98d409c8f9fe86f3a5f0e5d22813badc569fca8acabc7feecd745c440da1c5f20cd474ebe97",
              "width": 60
            }
          ],
          "name": "Discover Weekly Archive",
          "owner": {
            "display_name": null,
            "external_urls": {
              "spotify": "https://open.spotify.com/user/srinivasnaik2"
            },
            "href": "https://api.spotify.com/v1/users/srinivasnaik2",
            "id": "srinivasnaik2",
            "type": "user",
            "uri": "spotify:user:srinivasnaik2"
          },
          "primary_color": null,
          "public": true,
          "snapshot_id": "s9/trGBLXPHJF0IK3sblDj9X0kEgTqaCjncfxwT3xtOOYs3xFv64rtZCNl3/zGcZ",
          "tracks": {
            "href": "https://api.spotify.com/v1/users/srinivasnaik2/playlists/1nrs5ubGU7sV9OisgE9jNh/tracks",
            "total": 2632
          },
          "type": "playlist",
          "uri": "spotify:user:srinivasnaik2:playlist:1nrs5ubGU7sV9OisgE9jNh"
        },
        {
          "collaborative": false,
          "external_urls": {
            "spotify": "https://open.spotify.com/user/brunogarcia/playlist/4MRGjKqlWuJZJ8XHOGcqkR"
          },
          "href": "https://api.spotify.com/v1/users/brunogarcia/playlists/4MRGjKqlWuJZJ8XHOGcqkR",
          "id": "4MRGjKqlWuJZJ8XHOGcqkR",
          "images": [
            {
              "height": null,
              "url": "https://pl.scdn.co/images/pl/default/095f5c204b9dd643caaff58398997623f8cff6dc",
              "width": null
            }
          ],
          "name": "Post Rock Instrumental - Selected one by one with 💛",
          "owner": {
            "display_name": "Bruno Garcia",
            "external_urls": {
              "spotify": "https://open.spotify.com/user/brunogarcia"
            },
            "href": "https://api.spotify.com/v1/users/brunogarcia",
            "id": "brunogarcia",
            "type": "user",
            "uri": "spotify:user:brunogarcia"
          },
          "primary_color": null,
          "public": true,
          "snapshot_id": "u7SvTLrU/SSXyFaS/cZcY4ow2K8t7xSwhA4uO/+D3qMoPXNjfSPrzCzshlgKsa/d",
          "tracks": {
            "href": "https://api.spotify.com/v1/users/brunogarcia/playlists/4MRGjKqlWuJZJ8XHOGcqkR/tracks",
            "total": 261
          },
          "type": "playlist",
          "uri": "spotify:user:brunogarcia:playlist:4MRGjKqlWuJZJ8XHOGcqkR"
        },
        {
          "collaborative": false,
          "external_urls": {
            "spotify": "https://open.spotify.com/user/spotify/playlist/37i9dQZF1DWWEJlAGA9gs0"
          },
          "href": "https://api.spotify.com/v1/users/spotify/playlists/37i9dQZF1DWWEJlAGA9gs0",
          "id": "37i9dQZF1DWWEJlAGA9gs0",
          "images": [
            {
              "height": 300,
              "url": "https://i.scdn.co/image/3f48aae3f3e2b8aaf6c424747b795b9171b05988",
              "width": 300
            }
          ],
          "name": "Classical Essentials",
          "owner": {
            "display_name": "Spotify",
            "external_urls": {
              "spotify": "https://open.spotify.com/user/spotify"
            },
            "href": "https://api.spotify.com/v1/users/spotify",
            "id": "spotify",
            "type": "user",
            "uri": "spotify:user:spotify"
          },
          "primary_color": null,
          "public": true,
          "snapshot_id": "iGCJEf6Nyt/kolfo2vNFtWmYR7cMZqnlDkLPssrGQhJsjoMgBG5cHQBaA6FiB71C9j4EXqBLZxU=",
          "tracks": {
            "href": "https://api.spotify.com/v1/users/spotify/playlists/37i9dQZF1DWWEJlAGA9gs0/tracks",
            "total": 101
          },
          "type": "playlist",
          "uri": "spotify:user:spotify:playlist:37i9dQZF1DWWEJlAGA9gs0"
        },
        {
          "collaborative": false,
          "external_urls": {
            "spotify": "https://open.spotify.com/user/srinivasnaik2/playlist/4WubpHFfq77qk9AemD36IP"
          },
          "href": "https://api.spotify.com/v1/users/srinivasnaik2/playlists/4WubpHFfq77qk9AemD36IP",
          "id": "4WubpHFfq77qk9AemD36IP",
          "images": [
            {
              "height": 640,
              "url": "https://mosaic.scdn.co/640/49df83e45cbb7cf7a0481b056962f850dd656f434dd85f76ac224ecefd9b31d051f34876438c510051abd9a8cf7cf78a9606c19918fedb9024107e25a881597e10f0988a4a2fb1c339d7f46f6ecc1f20",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://mosaic.scdn.co/300/49df83e45cbb7cf7a0481b056962f850dd656f434dd85f76ac224ecefd9b31d051f34876438c510051abd9a8cf7cf78a9606c19918fedb9024107e25a881597e10f0988a4a2fb1c339d7f46f6ecc1f20",
              "width": 300
            },
            {
              "height": 60,
              "url": "https://mosaic.scdn.co/60/49df83e45cbb7cf7a0481b056962f850dd656f434dd85f76ac224ecefd9b31d051f34876438c510051abd9a8cf7cf78a9606c19918fedb9024107e25a881597e10f0988a4a2fb1c339d7f46f6ecc1f20",
              "width": 60
            }
          ],
          "name": "Santoor",
          "owner": {
            "display_name": null,
            "external_urls": {
              "spotify": "https://open.spotify.com/user/srinivasnaik2"
            },
            "href": "https://api.spotify.com/v1/users/srinivasnaik2",
            "id": "srinivasnaik2",
            "type": "user",
            "uri": "spotify:user:srinivasnaik2"
          },
          "primary_color": null,
          "public": true,
          "snapshot_id": "oVAOu9y5478DcVEtFj2Ex7JnbwLRf/A8l4QKaZypQ/9jlKc0okxLXQD13t84SVEB",
          "tracks": {
            "href": "https://api.spotify.com/v1/users/srinivasnaik2/playlists/4WubpHFfq77qk9AemD36IP/tracks",
            "total": 11
          },
          "type": "playlist",
          "uri": "spotify:user:srinivasnaik2:playlist:4WubpHFfq77qk9AemD36IP"
        },
        {
          "collaborative": false,
          "external_urls": {
            "spotify": "https://open.spotify.com/user/srinivasnaik2/playlist/1ZlHuilh0RxSMrWULWEkIV"
          },
          "href": "https://api.spotify.com/v1/users/srinivasnaik2/playlists/1ZlHuilh0RxSMrWULWEkIV",
          "id": "1ZlHuilh0RxSMrWULWEkIV",
          "images": [
            {
              "height": 640,
              "url": "https://mosaic.scdn.co/640/003230e81774c90fdb50e5985229498555dcf4d504a3ab1d5a5b097beb46078a9d6117b8dfe70df6614f0fc14d6f0d236f9e6b364dd02d48b9120fa97551c2ab611134f48000009419f5cf7530a98b8f",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://mosaic.scdn.co/300/003230e81774c90fdb50e5985229498555dcf4d504a3ab1d5a5b097beb46078a9d6117b8dfe70df6614f0fc14d6f0d236f9e6b364dd02d48b9120fa97551c2ab611134f48000009419f5cf7530a98b8f",
              "width": 300
            },
            {
              "height": 60,
              "url": "https://mosaic.scdn.co/60/003230e81774c90fdb50e5985229498555dcf4d504a3ab1d5a5b097beb46078a9d6117b8dfe70df6614f0fc14d6f0d236f9e6b364dd02d48b9120fa97551c2ab611134f48000009419f5cf7530a98b8f",
              "width": 60
            }
          ],
          "name": "Dialogue-ish",
          "owner": {
            "display_name": null,
            "external_urls": {
              "spotify": "https://open.spotify.com/user/srinivasnaik2"
            },
            "href": "https://api.spotify.com/v1/users/srinivasnaik2",
            "id": "srinivasnaik2",
            "type": "user",
            "uri": "spotify:user:srinivasnaik2"
          },
          "primary_color": null,
          "public": true,
          "snapshot_id": "UuDtsf/khrG3DhDxEOQOg6LD+Bxa3LHlhDgYgQC52TsKuZgOKWHDC8smpiqoSp5s",
          "tracks": {
            "href": "https://api.spotify.com/v1/users/srinivasnaik2/playlists/1ZlHuilh0RxSMrWULWEkIV/tracks",
            "total": 7
          },
          "type": "playlist",
          "uri": "spotify:user:srinivasnaik2:playlist:1ZlHuilh0RxSMrWULWEkIV"
        },
        {
          "collaborative": false,
          "external_urls": {
            "spotify": "https://open.spotify.com/user/srinivasnaik2/playlist/72ijysUluTtFG2mEwbRzlX"
          },
          "href": "https://api.spotify.com/v1/users/srinivasnaik2/playlists/72ijysUluTtFG2mEwbRzlX",
          "id": "72ijysUluTtFG2mEwbRzlX",
          "images": [
            {
              "height": 640,
              "url": "https://mosaic.scdn.co/640/3c5967c04f83130f1ffbcb2ce971c81f21ff2f6f93c884f100ee16c18bda5a9481dc20e0992aa793ab030a48ebad358694a79f7263678d33c41470e1d12a75e16a324e9258d9ebb200ebeeb151433cd0",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://mosaic.scdn.co/300/3c5967c04f83130f1ffbcb2ce971c81f21ff2f6f93c884f100ee16c18bda5a9481dc20e0992aa793ab030a48ebad358694a79f7263678d33c41470e1d12a75e16a324e9258d9ebb200ebeeb151433cd0",
              "width": 300
            },
            {
              "height": 60,
              "url": "https://mosaic.scdn.co/60/3c5967c04f83130f1ffbcb2ce971c81f21ff2f6f93c884f100ee16c18bda5a9481dc20e0992aa793ab030a48ebad358694a79f7263678d33c41470e1d12a75e16a324e9258d9ebb200ebeeb151433cd0",
              "width": 60
            }
          ],
          "name": "Bobby D",
          "owner": {
            "display_name": null,
            "external_urls": {
              "spotify": "https://open.spotify.com/user/srinivasnaik2"
            },
            "href": "https://api.spotify.com/v1/users/srinivasnaik2",
            "id": "srinivasnaik2",
            "type": "user",
            "uri": "spotify:user:srinivasnaik2"
          },
          "primary_color": null,
          "public": true,
          "snapshot_id": "EsHJ/PV13gWCZgb8k0tlyYOAIowl9zw+Ez+GtcTEkYvABaJEARq8tRBGlP4YBIaC",
          "tracks": {
            "href": "https://api.spotify.com/v1/users/srinivasnaik2/playlists/72ijysUluTtFG2mEwbRzlX/tracks",
            "total": 9
          },
          "type": "playlist",
          "uri": "spotify:user:srinivasnaik2:playlist:72ijysUluTtFG2mEwbRzlX"
        },
        {
          "collaborative": false,
          "external_urls": {
            "spotify": "https://open.spotify.com/user/srinivasnaik2/playlist/5tCbhO30SNwLMg9ORct26M"
          },
          "href": "https://api.spotify.com/v1/users/srinivasnaik2/playlists/5tCbhO30SNwLMg9ORct26M",
          "id": "5tCbhO30SNwLMg9ORct26M",
          "images": [
            {
              "height": 640,
              "url": "https://mosaic.scdn.co/640/3af775f9a9d2be37859ee353af21e914d53a3fa84a8eb55adfaafea181ba14c7e5f2607781c048157ab6298fdaa66b923a8c99f0f83360c05a6f2960928cbfcec230a5f09f2d2a7d96916c89b293d70c",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://mosaic.scdn.co/300/3af775f9a9d2be37859ee353af21e914d53a3fa84a8eb55adfaafea181ba14c7e5f2607781c048157ab6298fdaa66b923a8c99f0f83360c05a6f2960928cbfcec230a5f09f2d2a7d96916c89b293d70c",
              "width": 300
            },
            {
              "height": 60,
              "url": "https://mosaic.scdn.co/60/3af775f9a9d2be37859ee353af21e914d53a3fa84a8eb55adfaafea181ba14c7e5f2607781c048157ab6298fdaa66b923a8c99f0f83360c05a6f2960928cbfcec230a5f09f2d2a7d96916c89b293d70c",
              "width": 60
            }
          ],
          "name": "Sweet study spot",
          "owner": {
            "display_name": null,
            "external_urls": {
              "spotify": "https://open.spotify.com/user/srinivasnaik2"
            },
            "href": "https://api.spotify.com/v1/users/srinivasnaik2",
            "id": "srinivasnaik2",
            "type": "user",
            "uri": "spotify:user:srinivasnaik2"
          },
          "primary_color": null,
          "public": true,
          "snapshot_id": "+art4TQoxytDVuqem8lJvA1h62D6fcjNlvriIzWGkW3fFlD6K7CrgTgdXUO1rgIv",
          "tracks": {
            "href": "https://api.spotify.com/v1/users/srinivasnaik2/playlists/5tCbhO30SNwLMg9ORct26M/tracks",
            "total": 79
          },
          "type": "playlist",
          "uri": "spotify:user:srinivasnaik2:playlist:5tCbhO30SNwLMg9ORct26M"
        },
        {
          "collaborative": false,
          "external_urls": {
            "spotify": "https://open.spotify.com/user/srinivasnaik2/playlist/1ASND0oRJqkhk28apZhnCo"
          },
          "href": "https://api.spotify.com/v1/users/srinivasnaik2/playlists/1ASND0oRJqkhk28apZhnCo",
          "id": "1ASND0oRJqkhk28apZhnCo",
          "images": [
            {
              "height": 640,
              "url": "https://mosaic.scdn.co/640/64620d991c5c4ef2fca27fc034e6ebb6fad6030278d07d2361fce8f76216a2b3eddcf1f0e05e82b67b2767577b576a32854a7400161caf364d6a42c5f2e8c98a2805792ab518e0ab2bd460079344cb16",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://mosaic.scdn.co/300/64620d991c5c4ef2fca27fc034e6ebb6fad6030278d07d2361fce8f76216a2b3eddcf1f0e05e82b67b2767577b576a32854a7400161caf364d6a42c5f2e8c98a2805792ab518e0ab2bd460079344cb16",
              "width": 300
            },
            {
              "height": 60,
              "url": "https://mosaic.scdn.co/60/64620d991c5c4ef2fca27fc034e6ebb6fad6030278d07d2361fce8f76216a2b3eddcf1f0e05e82b67b2767577b576a32854a7400161caf364d6a42c5f2e8c98a2805792ab518e0ab2bd460079344cb16",
              "width": 60
            }
          ],
          "name": "HipHop - Getting started",
          "owner": {
            "display_name": null,
            "external_urls": {
              "spotify": "https://open.spotify.com/user/srinivasnaik2"
            },
            "href": "https://api.spotify.com/v1/users/srinivasnaik2",
            "id": "srinivasnaik2",
            "type": "user",
            "uri": "spotify:user:srinivasnaik2"
          },
          "primary_color": null,
          "public": true,
          "snapshot_id": "xSITeYyUVaFR53wJhAex7QinLp5xtdy69kFJ0QlR7DKoXD5J/qV5zInrCX2N1oic",
          "tracks": {
            "href": "https://api.spotify.com/v1/users/srinivasnaik2/playlists/1ASND0oRJqkhk28apZhnCo/tracks",
            "total": 11
          },
          "type": "playlist",
          "uri": "spotify:user:srinivasnaik2:playlist:1ASND0oRJqkhk28apZhnCo"
        },
        {
          "collaborative": false,
          "external_urls": {
            "spotify": "https://open.spotify.com/user/srinivasnaik2/playlist/3mE5GAcrMSgpUk3qkYB5NB"
          },
          "href": "https://api.spotify.com/v1/users/srinivasnaik2/playlists/3mE5GAcrMSgpUk3qkYB5NB",
          "id": "3mE5GAcrMSgpUk3qkYB5NB",
          "images": [
            {
              "height": 640,
              "url": "https://mosaic.scdn.co/640/2606844229e4514f4a7df117536eada43da4e63f6617a4d43e92e41228c438a16f6d289f0847cdce7b45697b303aa712f0ac894903c5ec0bc359dac4a801b124c2281d44c1fb5fbd9f941ad46cf9edce",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://mosaic.scdn.co/300/2606844229e4514f4a7df117536eada43da4e63f6617a4d43e92e41228c438a16f6d289f0847cdce7b45697b303aa712f0ac894903c5ec0bc359dac4a801b124c2281d44c1fb5fbd9f941ad46cf9edce",
              "width": 300
            },
            {
              "height": 60,
              "url": "https://mosaic.scdn.co/60/2606844229e4514f4a7df117536eada43da4e63f6617a4d43e92e41228c438a16f6d289f0847cdce7b45697b303aa712f0ac894903c5ec0bc359dac4a801b124c2281d44c1fb5fbd9f941ad46cf9edce",
              "width": 60
            }
          ],
          "name": "Desi",
          "owner": {
            "display_name": null,
            "external_urls": {
              "spotify": "https://open.spotify.com/user/srinivasnaik2"
            },
            "href": "https://api.spotify.com/v1/users/srinivasnaik2",
            "id": "srinivasnaik2",
            "type": "user",
            "uri": "spotify:user:srinivasnaik2"
          },
          "primary_color": null,
          "public": true,
          "snapshot_id": "dbv11XYudAy491iFiusnkXJO5kVOguxp26mTDlQODwveBH04MVZNIwE02QrfSaou",
          "tracks": {
            "href": "https://api.spotify.com/v1/users/srinivasnaik2/playlists/3mE5GAcrMSgpUk3qkYB5NB/tracks",
            "total": 68
          },
          "type": "playlist",
          "uri": "spotify:user:srinivasnaik2:playlist:3mE5GAcrMSgpUk3qkYB5NB"
        },
        {
          "collaborative": false,
          "external_urls": {
            "spotify": "https://open.spotify.com/user/1136157807/playlist/5MnSAk1gE4bWsNlPDSqUHn"
          },
          "href": "https://api.spotify.com/v1/users/1136157807/playlists/5MnSAk1gE4bWsNlPDSqUHn",
          "id": "5MnSAk1gE4bWsNlPDSqUHn",
          "images": [
            {
              "height": 640,
              "url": "https://mosaic.scdn.co/640/06e1a6c6041ac174cc9d8873a39c7dfe6eb11a5b195cc987eab3f47ccb1c2f7a62a1b469ffb83c213196d6341f94ba3909b1f0e722096ddf6ab1f64141c22ef63f222f46c77ccdfdf481043d2fd99fc8",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://mosaic.scdn.co/300/06e1a6c6041ac174cc9d8873a39c7dfe6eb11a5b195cc987eab3f47ccb1c2f7a62a1b469ffb83c213196d6341f94ba3909b1f0e722096ddf6ab1f64141c22ef63f222f46c77ccdfdf481043d2fd99fc8",
              "width": 300
            },
            {
              "height": 60,
              "url": "https://mosaic.scdn.co/60/06e1a6c6041ac174cc9d8873a39c7dfe6eb11a5b195cc987eab3f47ccb1c2f7a62a1b469ffb83c213196d6341f94ba3909b1f0e722096ddf6ab1f64141c22ef63f222f46c77ccdfdf481043d2fd99fc8",
              "width": 60
            }
          ],
          "name": "Indian Classical Instrumental",
          "owner": {
            "display_name": "Vishavtej S. Sidhu",
            "external_urls": {
              "spotify": "https://open.spotify.com/user/1136157807"
            },
            "href": "https://api.spotify.com/v1/users/1136157807",
            "id": "1136157807",
            "type": "user",
            "uri": "spotify:user:1136157807"
          },
          "primary_color": null,
          "public": true,
          "snapshot_id": "1WSNg9Lkht05mR3gdd+QmVgp9mLO1jZEG396WXeyZ2gzSOmYUB1fBe7kBmsE2fqS",
          "tracks": {
            "href": "https://api.spotify.com/v1/users/1136157807/playlists/5MnSAk1gE4bWsNlPDSqUHn/tracks",
            "total": 81
          },
          "type": "playlist",
          "uri": "spotify:user:1136157807:playlist:5MnSAk1gE4bWsNlPDSqUHn"
        },
        {
          "collaborative": false,
          "external_urls": {
            "spotify": "https://open.spotify.com/user/srinivasnaik2/playlist/7F7JLOalRJKNbksZJjCNeW"
          },
          "href": "https://api.spotify.com/v1/users/srinivasnaik2/playlists/7F7JLOalRJKNbksZJjCNeW",
          "id": "7F7JLOalRJKNbksZJjCNeW",
          "images": [
            {
              "height": 640,
              "url": "https://mosaic.scdn.co/640/12aa98788ec8a86859546821af90631946c7ec3dc2e95c93922273f647adc84110141f734bcce6edfb50281c16206c808e453e67991a182275ab411afda3b1fa4fc7f23a1850802a913be317d2c09f48",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://mosaic.scdn.co/300/12aa98788ec8a86859546821af90631946c7ec3dc2e95c93922273f647adc84110141f734bcce6edfb50281c16206c808e453e67991a182275ab411afda3b1fa4fc7f23a1850802a913be317d2c09f48",
              "width": 300
            },
            {
              "height": 60,
              "url": "https://mosaic.scdn.co/60/12aa98788ec8a86859546821af90631946c7ec3dc2e95c93922273f647adc84110141f734bcce6edfb50281c16206c808e453e67991a182275ab411afda3b1fa4fc7f23a1850802a913be317d2c09f48",
              "width": 60
            }
          ],
          "name": "pardeh",
          "owner": {
            "display_name": null,
            "external_urls": {
              "spotify": "https://open.spotify.com/user/srinivasnaik2"
            },
            "href": "https://api.spotify.com/v1/users/srinivasnaik2",
            "id": "srinivasnaik2",
            "type": "user",
            "uri": "spotify:user:srinivasnaik2"
          },
          "primary_color": null,
          "public": true,
          "snapshot_id": "1cIxxZhA7UNvhnn0iNcnRDpsEPJpOzflzV79V2GFmykhZLh1OBnxTh5k8WSPcjqq",
          "tracks": {
            "href": "https://api.spotify.com/v1/users/srinivasnaik2/playlists/7F7JLOalRJKNbksZJjCNeW/tracks",
            "total": 15
          },
          "type": "playlist",
          "uri": "spotify:user:srinivasnaik2:playlist:7F7JLOalRJKNbksZJjCNeW"
        },
        {
          "collaborative": false,
          "external_urls": {
            "spotify": "https://open.spotify.com/user/srinivasnaik2/playlist/49Rz5mDnFzuoaZxDaMWpHY"
          },
          "href": "https://api.spotify.com/v1/users/srinivasnaik2/playlists/49Rz5mDnFzuoaZxDaMWpHY",
          "id": "49Rz5mDnFzuoaZxDaMWpHY",
          "images": [
            {
              "height": 640,
              "url": "https://mosaic.scdn.co/640/414d3fa5fd0910cb37ad6f95684df63bc1f8d640881fedd75a3c0b6de327ff10aebe4e3866463bd3d62e03236d559ab706d7d43ead7ae5c544a3c96fe5cd9ebd194dcdb210ac8758fac291fd42f7b105",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://mosaic.scdn.co/300/414d3fa5fd0910cb37ad6f95684df63bc1f8d640881fedd75a3c0b6de327ff10aebe4e3866463bd3d62e03236d559ab706d7d43ead7ae5c544a3c96fe5cd9ebd194dcdb210ac8758fac291fd42f7b105",
              "width": 300
            },
            {
              "height": 60,
              "url": "https://mosaic.scdn.co/60/414d3fa5fd0910cb37ad6f95684df63bc1f8d640881fedd75a3c0b6de327ff10aebe4e3866463bd3d62e03236d559ab706d7d43ead7ae5c544a3c96fe5cd9ebd194dcdb210ac8758fac291fd42f7b105",
              "width": 60
            }
          ],
          "name": "Workout - SN",
          "owner": {
            "display_name": null,
            "external_urls": {
              "spotify": "https://open.spotify.com/user/srinivasnaik2"
            },
            "href": "https://api.spotify.com/v1/users/srinivasnaik2",
            "id": "srinivasnaik2",
            "type": "user",
            "uri": "spotify:user:srinivasnaik2"
          },
          "primary_color": null,
          "public": true,
          "snapshot_id": "2cvb3fqjgO2AwqvNRm0Syd4YVw4/xuALXCf9h0kRP/qx7XtCIGaCpJPE+fIzQEp0",
          "tracks": {
            "href": "https://api.spotify.com/v1/users/srinivasnaik2/playlists/49Rz5mDnFzuoaZxDaMWpHY/tracks",
            "total": 77
          },
          "type": "playlist",
          "uri": "spotify:user:srinivasnaik2:playlist:49Rz5mDnFzuoaZxDaMWpHY"
        },
        {
          "collaborative": false,
          "external_urls": {
            "spotify": "https://open.spotify.com/user/srinivasnaik2/playlist/13ACCrdMYgRZgADrvCG6uS"
          },
          "href": "https://api.spotify.com/v1/users/srinivasnaik2/playlists/13ACCrdMYgRZgADrvCG6uS",
          "id": "13ACCrdMYgRZgADrvCG6uS",
          "images": [
            {
              "height": 640,
              "url": "https://mosaic.scdn.co/640/10ad5cf9a02f27176365ea220f747da2a47eec1ca1eccc5f4b2158ed8c021ca5aaec245c87f300ebe3c9a21d213709914e20362744ea779342aacac0f52e3df308a3e63b6d2350a9f51628741fd87017",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://mosaic.scdn.co/300/10ad5cf9a02f27176365ea220f747da2a47eec1ca1eccc5f4b2158ed8c021ca5aaec245c87f300ebe3c9a21d213709914e20362744ea779342aacac0f52e3df308a3e63b6d2350a9f51628741fd87017",
              "width": 300
            },
            {
              "height": 60,
              "url": "https://mosaic.scdn.co/60/10ad5cf9a02f27176365ea220f747da2a47eec1ca1eccc5f4b2158ed8c021ca5aaec245c87f300ebe3c9a21d213709914e20362744ea779342aacac0f52e3df308a3e63b6d2350a9f51628741fd87017",
              "width": 60
            }
          ],
          "name": "Old Faves",
          "owner": {
            "display_name": null,
            "external_urls": {
              "spotify": "https://open.spotify.com/user/srinivasnaik2"
            },
            "href": "https://api.spotify.com/v1/users/srinivasnaik2",
            "id": "srinivasnaik2",
            "type": "user",
            "uri": "spotify:user:srinivasnaik2"
          },
          "primary_color": null,
          "public": true,
          "snapshot_id": "Mhj6c8Kw5R/9sMYr7W3jK+Ch1lFF/8S7csOjaXx7SBKoz/OIO+dtn/cghrHyBhns",
          "tracks": {
            "href": "https://api.spotify.com/v1/users/srinivasnaik2/playlists/13ACCrdMYgRZgADrvCG6uS/tracks",
            "total": 144
          },
          "type": "playlist",
          "uri": "spotify:user:srinivasnaik2:playlist:13ACCrdMYgRZgADrvCG6uS"
        },
        {
          "collaborative": false,
          "external_urls": {
            "spotify": "https://open.spotify.com/user/srinivasnaik2/playlist/0NunqqtoYyYpx23MCjK7Ma"
          },
          "href": "https://api.spotify.com/v1/users/srinivasnaik2/playlists/0NunqqtoYyYpx23MCjK7Ma",
          "id": "0NunqqtoYyYpx23MCjK7Ma",
          "images": [
            {
              "height": 640,
              "url": "https://mosaic.scdn.co/640/03d97de27e99fd8099506ea172531cea0da596545f903ee184c3198bcbe4ef1b52915d93d7e872067e84bf69f12e5e6e4b828c25aa916a9a3819920bb68b39fdc2409d0f526ad48775ddcd93ff496cda",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://mosaic.scdn.co/300/03d97de27e99fd8099506ea172531cea0da596545f903ee184c3198bcbe4ef1b52915d93d7e872067e84bf69f12e5e6e4b828c25aa916a9a3819920bb68b39fdc2409d0f526ad48775ddcd93ff496cda",
              "width": 300
            },
            {
              "height": 60,
              "url": "https://mosaic.scdn.co/60/03d97de27e99fd8099506ea172531cea0da596545f903ee184c3198bcbe4ef1b52915d93d7e872067e84bf69f12e5e6e4b828c25aa916a9a3819920bb68b39fdc2409d0f526ad48775ddcd93ff496cda",
              "width": 60
            }
          ],
          "name": "Finds in and before 2015",
          "owner": {
            "display_name": null,
            "external_urls": {
              "spotify": "https://open.spotify.com/user/srinivasnaik2"
            },
            "href": "https://api.spotify.com/v1/users/srinivasnaik2",
            "id": "srinivasnaik2",
            "type": "user",
            "uri": "spotify:user:srinivasnaik2"
          },
          "primary_color": null,
          "public": true,
          "snapshot_id": "uJ+fOQjUhDX7bJHX/eYJrf1AiZwNP89+2HTY9f2H2/uDmyS67ipTYn+KIuFZebZp",
          "tracks": {
            "href": "https://api.spotify.com/v1/users/srinivasnaik2/playlists/0NunqqtoYyYpx23MCjK7Ma/tracks",
            "total": 148
          },
          "type": "playlist",
          "uri": "spotify:user:srinivasnaik2:playlist:0NunqqtoYyYpx23MCjK7Ma"
        }
      ],
      "limit": 20,
      "next": null,
      "offset": 0,
      "previous": null,
      "total": 19
    };

      loadUserData(): void{
        this._spotifyService.getUser().subscribe(
          data => {
            console.log(data);
            this.data = data.data.body;
          }
        )        
      }


}