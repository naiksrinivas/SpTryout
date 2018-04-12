import {Component} from '@angular/core';
import { templateSourceUrl } from '@angular/compiler';

@Component({
    templateUrl : "app.playlists.component.html",
    selector: "app-playlists"
})
export class AppPlaylistsComponent{ 

    data = {
        "collaborative": false,
        "description": null,
        "external_urls": {
          "spotify": "https://open.spotify.com/user/srinivasnaik2/playlist/448afXA6d1uP2qrq5r8A2n"
        },
        "followers": {
          "href": null,
          "total": 0
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
          "href": "https://api.spotify.com/v1/users/srinivasnaik2/playlists/448afXA6d1uP2qrq5r8A2n/tracks?offset=0&limit=100",
          "items": [
            {
              "added_at": "2018-03-05T22:48:28Z",
              "added_by": {
                "external_urls": {
                  "spotify": "https://open.spotify.com/user/srinivasnaik2"
                },
                "href": "https://api.spotify.com/v1/users/srinivasnaik2",
                "id": "srinivasnaik2",
                "type": "user",
                "uri": "spotify:user:srinivasnaik2"
              },
              "is_local": false,
              "primary_color": null,
              "track": {
                "album": {
                  "album_type": "single",
                  "artists": [
                    {
                      "external_urls": {
                        "spotify": "https://open.spotify.com/artist/0OROVBEZCocg0FcgJpyBse"
                      },
                      "href": "https://api.spotify.com/v1/artists/0OROVBEZCocg0FcgJpyBse",
                      "id": "0OROVBEZCocg0FcgJpyBse",
                      "name": "Alex Sensation",
                      "type": "artist",
                      "uri": "spotify:artist:0OROVBEZCocg0FcgJpyBse"
                    },
                    {
                      "external_urls": {
                        "spotify": "https://open.spotify.com/artist/1i8SpTcr7yvPOmcqrbnVXY"
                      },
                      "href": "https://api.spotify.com/v1/artists/1i8SpTcr7yvPOmcqrbnVXY",
                      "id": "1i8SpTcr7yvPOmcqrbnVXY",
                      "name": "Ozuna",
                      "type": "artist",
                      "uri": "spotify:artist:1i8SpTcr7yvPOmcqrbnVXY"
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
                    "spotify": "https://open.spotify.com/album/1mt3ZuNrHnd6gtRJhSy7Fn"
                  },
                  "href": "https://api.spotify.com/v1/albums/1mt3ZuNrHnd6gtRJhSy7Fn",
                  "id": "1mt3ZuNrHnd6gtRJhSy7Fn",
                  "images": [
                    {
                      "height": 640,
                      "url": "https://i.scdn.co/image/a07db417fe5bdebcf2d72a5df4b05a84b055b3e3",
                      "width": 640
                    },
                    {
                      "height": 300,
                      "url": "https://i.scdn.co/image/16fe7dc29133a8bf723159e11d7da1cf2c75b2f3",
                      "width": 300
                    },
                    {
                      "height": 64,
                      "url": "https://i.scdn.co/image/643b9c8c3f2f027c79d97f9eb779d3424b129346",
                      "width": 64
                    }
                  ],
                  "name": "Que Va",
                  "release_date": "2017-08-04",
                  "release_date_precision": "day",
                  "type": "album",
                  "uri": "spotify:album:1mt3ZuNrHnd6gtRJhSy7Fn"
                },
                "artists": [
                  {
                    "external_urls": {
                      "spotify": "https://open.spotify.com/artist/0OROVBEZCocg0FcgJpyBse"
                    },
                    "href": "https://api.spotify.com/v1/artists/0OROVBEZCocg0FcgJpyBse",
                    "id": "0OROVBEZCocg0FcgJpyBse",
                    "name": "Alex Sensation",
                    "type": "artist",
                    "uri": "spotify:artist:0OROVBEZCocg0FcgJpyBse"
                  },
                  {
                    "external_urls": {
                      "spotify": "https://open.spotify.com/artist/1i8SpTcr7yvPOmcqrbnVXY"
                    },
                    "href": "https://api.spotify.com/v1/artists/1i8SpTcr7yvPOmcqrbnVXY",
                    "id": "1i8SpTcr7yvPOmcqrbnVXY",
                    "name": "Ozuna",
                    "type": "artist",
                    "uri": "spotify:artist:1i8SpTcr7yvPOmcqrbnVXY"
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
                "duration_ms": 238160,
                "episode": false,
                "explicit": false,
                "external_ids": {
                  "isrc": "USUM71703862"
                },
                "external_urls": {
                  "spotify": "https://open.spotify.com/track/6J1R5wtPXiHiwiPstOSI56"
                },
                "href": "https://api.spotify.com/v1/tracks/6J1R5wtPXiHiwiPstOSI56",
                "id": "6J1R5wtPXiHiwiPstOSI56",
                "is_local": false,
                "name": "Que Va",
                "popularity": 80,
                "preview_url": "https://p.scdn.co/mp3-preview/cdd4c16695ccdbe71f6f779621d774054a3fcd24?cid=774b29d4f13844c495f206cafdad9c86",
                "track": true,
                "track_number": 1,
                "type": "track",
                "uri": "spotify:track:6J1R5wtPXiHiwiPstOSI56"
              },
              "video_thumbnail": {
                "url": null
              }
            },
            {
              "added_at": "2018-03-07T01:45:59Z",
              "added_by": {
                "external_urls": {
                  "spotify": "https://open.spotify.com/user/srinivasnaik2"
                },
                "href": "https://api.spotify.com/v1/users/srinivasnaik2",
                "id": "srinivasnaik2",
                "type": "user",
                "uri": "spotify:user:srinivasnaik2"
              },
              "is_local": false,
              "primary_color": null,
              "track": {
                "album": {
                  "album_type": "single",
                  "artists": [
                    {
                      "external_urls": {
                        "spotify": "https://open.spotify.com/artist/2OnKRchqP7tT0FzTvWIFI7"
                      },
                      "href": "https://api.spotify.com/v1/artists/2OnKRchqP7tT0FzTvWIFI7",
                      "id": "2OnKRchqP7tT0FzTvWIFI7",
                      "name": "Wolfine",
                      "type": "artist",
                      "uri": "spotify:artist:2OnKRchqP7tT0FzTvWIFI7"
                    }
                  ],
                  "available_markets": [],
                  "external_urls": {
                    "spotify": "https://open.spotify.com/album/3ZMbdHPyw01HOFVsBAMDch"
                  },
                  "href": "https://api.spotify.com/v1/albums/3ZMbdHPyw01HOFVsBAMDch",
                  "id": "3ZMbdHPyw01HOFVsBAMDch",
                  "images": [
                    {
                      "height": 640,
                      "url": "https://i.scdn.co/image/a3dde97cd07f9945517353ee4a9f46e480b11c35",
                      "width": 640
                    },
                    {
                      "height": 300,
                      "url": "https://i.scdn.co/image/62b8880446142cc20e3d19dac341087b3c353094",
                      "width": 300
                    },
                    {
                      "height": 64,
                      "url": "https://i.scdn.co/image/c88d106e2c6ddc2393a3f4c0484bb1e2d0956ab6",
                      "width": 64
                    }
                  ],
                  "name": "Bella",
                  "release_date": "2017-12-29",
                  "release_date_precision": "day",
                  "type": "album",
                  "uri": "spotify:album:3ZMbdHPyw01HOFVsBAMDch"
                },
                "artists": [
                  {
                    "external_urls": {
                      "spotify": "https://open.spotify.com/artist/2OnKRchqP7tT0FzTvWIFI7"
                    },
                    "href": "https://api.spotify.com/v1/artists/2OnKRchqP7tT0FzTvWIFI7",
                    "id": "2OnKRchqP7tT0FzTvWIFI7",
                    "name": "Wolfine",
                    "type": "artist",
                    "uri": "spotify:artist:2OnKRchqP7tT0FzTvWIFI7"
                  }
                ],
                "available_markets": [],
                "disc_number": 1,
                "duration_ms": 197120,
                "episode": false,
                "explicit": false,
                "external_ids": {
                  "isrc": "MXF151700775"
                },
                "external_urls": {
                  "spotify": "https://open.spotify.com/track/4R55IUi2x7S5ek2SpebOiE"
                },
                "href": "https://api.spotify.com/v1/tracks/4R55IUi2x7S5ek2SpebOiE",
                "id": "4R55IUi2x7S5ek2SpebOiE",
                "is_local": false,
                "name": "Bella",
                "popularity": 79,
                "preview_url": null,
                "track": true,
                "track_number": 1,
                "type": "track",
                "uri": "spotify:track:4R55IUi2x7S5ek2SpebOiE"
              },
              "video_thumbnail": {
                "url": null
              }
            },
            {
              "added_at": "2018-03-07T01:49:06Z",
              "added_by": {
                "external_urls": {
                  "spotify": "https://open.spotify.com/user/srinivasnaik2"
                },
                "href": "https://api.spotify.com/v1/users/srinivasnaik2",
                "id": "srinivasnaik2",
                "type": "user",
                "uri": "spotify:user:srinivasnaik2"
              },
              "is_local": false,
              "primary_color": null,
              "track": {
                "album": {
                  "album_type": "single",
                  "artists": [
                    {
                      "external_urls": {
                        "spotify": "https://open.spotify.com/artist/3E6xrwgnVfYCrCs0ePERDz"
                      },
                      "href": "https://api.spotify.com/v1/artists/3E6xrwgnVfYCrCs0ePERDz",
                      "id": "3E6xrwgnVfYCrCs0ePERDz",
                      "name": "Wisin",
                      "type": "artist",
                      "uri": "spotify:artist:3E6xrwgnVfYCrCs0ePERDz"
                    },
                    {
                      "external_urls": {
                        "spotify": "https://open.spotify.com/artist/0eHQ9o50hj6ZDNBt6Ys1sD"
                      },
                      "href": "https://api.spotify.com/v1/artists/0eHQ9o50hj6ZDNBt6Ys1sD",
                      "id": "0eHQ9o50hj6ZDNBt6Ys1sD",
                      "name": "Yandel",
                      "type": "artist",
                      "uri": "spotify:artist:0eHQ9o50hj6ZDNBt6Ys1sD"
                    },
                    {
                      "external_urls": {
                        "spotify": "https://open.spotify.com/artist/4VMYDCV2IEDYJArk749S6m"
                      },
                      "href": "https://api.spotify.com/v1/artists/4VMYDCV2IEDYJArk749S6m",
                      "id": "4VMYDCV2IEDYJArk749S6m",
                      "name": "Daddy Yankee",
                      "type": "artist",
                      "uri": "spotify:artist:4VMYDCV2IEDYJArk749S6m"
                    }
                  ],
                  "available_markets": [],
                  "external_urls": {
                    "spotify": "https://open.spotify.com/album/0R4TqazcMYnwqPzRCAPZmk"
                  },
                  "href": "https://api.spotify.com/v1/albums/0R4TqazcMYnwqPzRCAPZmk",
                  "id": "0R4TqazcMYnwqPzRCAPZmk",
                  "images": [
                    {
                      "height": 640,
                      "url": "https://i.scdn.co/image/b9f2b99f9a23e24f7cf31be203d7a137a87f37b7",
                      "width": 640
                    },
                    {
                      "height": 300,
                      "url": "https://i.scdn.co/image/9a989acc128e2d860af1189213b6e2d2f6c162f8",
                      "width": 300
                    },
                    {
                      "height": 64,
                      "url": "https://i.scdn.co/image/7ca445d2cc71a9a1f8cc5cd1980b2dfcf3487ec1",
                      "width": 64
                    }
                  ],
                  "name": "Todo Comienza en la Disco",
                  "release_date": "2017-11-24",
                  "release_date_precision": "day",
                  "type": "album",
                  "uri": "spotify:album:0R4TqazcMYnwqPzRCAPZmk"
                },
                "artists": [
                  {
                    "external_urls": {
                      "spotify": "https://open.spotify.com/artist/3E6xrwgnVfYCrCs0ePERDz"
                    },
                    "href": "https://api.spotify.com/v1/artists/3E6xrwgnVfYCrCs0ePERDz",
                    "id": "3E6xrwgnVfYCrCs0ePERDz",
                    "name": "Wisin",
                    "type": "artist",
                    "uri": "spotify:artist:3E6xrwgnVfYCrCs0ePERDz"
                  },
                  {
                    "external_urls": {
                      "spotify": "https://open.spotify.com/artist/0eHQ9o50hj6ZDNBt6Ys1sD"
                    },
                    "href": "https://api.spotify.com/v1/artists/0eHQ9o50hj6ZDNBt6Ys1sD",
                    "id": "0eHQ9o50hj6ZDNBt6Ys1sD",
                    "name": "Yandel",
                    "type": "artist",
                    "uri": "spotify:artist:0eHQ9o50hj6ZDNBt6Ys1sD"
                  },
                  {
                    "external_urls": {
                      "spotify": "https://open.spotify.com/artist/4VMYDCV2IEDYJArk749S6m"
                    },
                    "href": "https://api.spotify.com/v1/artists/4VMYDCV2IEDYJArk749S6m",
                    "id": "4VMYDCV2IEDYJArk749S6m",
                    "name": "Daddy Yankee",
                    "type": "artist",
                    "uri": "spotify:artist:4VMYDCV2IEDYJArk749S6m"
                  }
                ],
                "available_markets": [],
                "disc_number": 1,
                "duration_ms": 268106,
                "episode": false,
                "explicit": false,
                "external_ids": {
                  "isrc": "USSD11700429"
                },
                "external_urls": {
                  "spotify": "https://open.spotify.com/track/5P45FGGEl99tHmKx6RaP9C"
                },
                "href": "https://api.spotify.com/v1/tracks/5P45FGGEl99tHmKx6RaP9C",
                "id": "5P45FGGEl99tHmKx6RaP9C",
                "is_local": false,
                "name": "Todo Comienza en la Disco",
                "popularity": 30,
                "preview_url": null,
                "track": true,
                "track_number": 1,
                "type": "track",
                "uri": "spotify:track:5P45FGGEl99tHmKx6RaP9C"
              },
              "video_thumbnail": {
                "url": null
              }
            },
            {
              "added_at": "2018-03-08T21:15:45Z",
              "added_by": {
                "external_urls": {
                  "spotify": "https://open.spotify.com/user/srinivasnaik2"
                },
                "href": "https://api.spotify.com/v1/users/srinivasnaik2",
                "id": "srinivasnaik2",
                "type": "user",
                "uri": "spotify:user:srinivasnaik2"
              },
              "is_local": false,
              "primary_color": null,
              "track": {
                "album": {
                  "album_type": "single",
                  "artists": [
                    {
                      "external_urls": {
                        "spotify": "https://open.spotify.com/artist/07YUOmWljBTXwIseAUd9TW"
                      },
                      "href": "https://api.spotify.com/v1/artists/07YUOmWljBTXwIseAUd9TW",
                      "id": "07YUOmWljBTXwIseAUd9TW",
                      "name": "Sebastian Yatra",
                      "type": "artist",
                      "uri": "spotify:artist:07YUOmWljBTXwIseAUd9TW"
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
                    "spotify": "https://open.spotify.com/album/6jwRcmQ8I5ZJTZ0xqg6vdH"
                  },
                  "href": "https://api.spotify.com/v1/albums/6jwRcmQ8I5ZJTZ0xqg6vdH",
                  "id": "6jwRcmQ8I5ZJTZ0xqg6vdH",
                  "images": [
                    {
                      "height": 640,
                      "url": "https://i.scdn.co/image/eefb7e364c3fef777eabbe5a600dc176fee045d3",
                      "width": 640
                    },
                    {
                      "height": 300,
                      "url": "https://i.scdn.co/image/2bfb4b4e686eb635b122c4907d4ccde2fd630d28",
                      "width": 300
                    },
                    {
                      "height": 64,
                      "url": "https://i.scdn.co/image/07642b29849c64968bb49156d934d7d740f0d3ee",
                      "width": 64
                    }
                  ],
                  "name": "No Hay Nadie Más",
                  "release_date": "2018-01-26",
                  "release_date_precision": "day",
                  "type": "album",
                  "uri": "spotify:album:6jwRcmQ8I5ZJTZ0xqg6vdH"
                },
                "artists": [
                  {
                    "external_urls": {
                      "spotify": "https://open.spotify.com/artist/07YUOmWljBTXwIseAUd9TW"
                    },
                    "href": "https://api.spotify.com/v1/artists/07YUOmWljBTXwIseAUd9TW",
                    "id": "07YUOmWljBTXwIseAUd9TW",
                    "name": "Sebastian Yatra",
                    "type": "artist",
                    "uri": "spotify:artist:07YUOmWljBTXwIseAUd9TW"
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
                "duration_ms": 197680,
                "episode": false,
                "explicit": false,
                "external_ids": {
                  "isrc": "USUM71713890"
                },
                "external_urls": {
                  "spotify": "https://open.spotify.com/track/0U8WdltGpu3OC0ma9yLmjX"
                },
                "href": "https://api.spotify.com/v1/tracks/0U8WdltGpu3OC0ma9yLmjX",
                "id": "0U8WdltGpu3OC0ma9yLmjX",
                "is_local": false,
                "name": "No Hay Nadie Más",
                "popularity": 79,
                "preview_url": "https://p.scdn.co/mp3-preview/cfabe8cf1ac53736a1e037b04aff5b682528e8e9?cid=774b29d4f13844c495f206cafdad9c86",
                "track": true,
                "track_number": 1,
                "type": "track",
                "uri": "spotify:track:0U8WdltGpu3OC0ma9yLmjX"
              },
              "video_thumbnail": {
                "url": null
              }
            },
            {
              "added_at": "2018-03-10T20:37:52Z",
              "added_by": {
                "external_urls": {
                  "spotify": "https://open.spotify.com/user/srinivasnaik2"
                },
                "href": "https://api.spotify.com/v1/users/srinivasnaik2",
                "id": "srinivasnaik2",
                "type": "user",
                "uri": "spotify:user:srinivasnaik2"
              },
              "is_local": false,
              "primary_color": null,
              "track": {
                "album": {
                  "album_type": "single",
                  "artists": [
                    {
                      "external_urls": {
                        "spotify": "https://open.spotify.com/artist/4V8Sr092TqfHkfAA5fXXqG"
                      },
                      "href": "https://api.spotify.com/v1/artists/4V8Sr092TqfHkfAA5fXXqG",
                      "id": "4V8Sr092TqfHkfAA5fXXqG",
                      "name": "Luis Fonsi",
                      "type": "artist",
                      "uri": "spotify:artist:4V8Sr092TqfHkfAA5fXXqG"
                    },
                    {
                      "external_urls": {
                        "spotify": "https://open.spotify.com/artist/6S2OmqARrzebs0tKUEyXyp"
                      },
                      "href": "https://api.spotify.com/v1/artists/6S2OmqARrzebs0tKUEyXyp",
                      "id": "6S2OmqARrzebs0tKUEyXyp",
                      "name": "Demi Lovato",
                      "type": "artist",
                      "uri": "spotify:artist:6S2OmqARrzebs0tKUEyXyp"
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
                    "spotify": "https://open.spotify.com/album/2Tt0EzXpempSOIHFXVX42v"
                  },
                  "href": "https://api.spotify.com/v1/albums/2Tt0EzXpempSOIHFXVX42v",
                  "id": "2Tt0EzXpempSOIHFXVX42v",
                  "images": [
                    {
                      "height": 640,
                      "url": "https://i.scdn.co/image/ce46a874d536b9f3142934e8ccb6ed9ecf03bc55",
                      "width": 640
                    },
                    {
                      "height": 300,
                      "url": "https://i.scdn.co/image/ab24a2a4725e4a13be9df29ba3a1c614b46474ca",
                      "width": 300
                    },
                    {
                      "height": 64,
                      "url": "https://i.scdn.co/image/1289fa99f940167104536e179f4a2a4cfb3d89ff",
                      "width": 64
                    }
                  ],
                  "name": "Échame La Culpa",
                  "release_date": "2017-11-17",
                  "release_date_precision": "day",
                  "type": "album",
                  "uri": "spotify:album:2Tt0EzXpempSOIHFXVX42v"
                },
                "artists": [
                  {
                    "external_urls": {
                      "spotify": "https://open.spotify.com/artist/4V8Sr092TqfHkfAA5fXXqG"
                    },
                    "href": "https://api.spotify.com/v1/artists/4V8Sr092TqfHkfAA5fXXqG",
                    "id": "4V8Sr092TqfHkfAA5fXXqG",
                    "name": "Luis Fonsi",
                    "type": "artist",
                    "uri": "spotify:artist:4V8Sr092TqfHkfAA5fXXqG"
                  },
                  {
                    "external_urls": {
                      "spotify": "https://open.spotify.com/artist/6S2OmqARrzebs0tKUEyXyp"
                    },
                    "href": "https://api.spotify.com/v1/artists/6S2OmqARrzebs0tKUEyXyp",
                    "id": "6S2OmqARrzebs0tKUEyXyp",
                    "name": "Demi Lovato",
                    "type": "artist",
                    "uri": "spotify:artist:6S2OmqARrzebs0tKUEyXyp"
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
                "duration_ms": 173720,
                "episode": false,
                "explicit": false,
                "external_ids": {
                  "isrc": "USUM71712163"
                },
                "external_urls": {
                  "spotify": "https://open.spotify.com/track/2hl6q70unbviGo3g1R7uFx"
                },
                "href": "https://api.spotify.com/v1/tracks/2hl6q70unbviGo3g1R7uFx",
                "id": "2hl6q70unbviGo3g1R7uFx",
                "is_local": false,
                "name": "Échame La Culpa",
                "popularity": 85,
                "preview_url": "https://p.scdn.co/mp3-preview/4ecee089330ec898a61f532c112286e534e8902f?cid=774b29d4f13844c495f206cafdad9c86",
                "track": true,
                "track_number": 1,
                "type": "track",
                "uri": "spotify:track:2hl6q70unbviGo3g1R7uFx"
              },
              "video_thumbnail": {
                "url": null
              }
            },
            {
              "added_at": "2018-03-10T20:42:25Z",
              "added_by": {
                "external_urls": {
                  "spotify": "https://open.spotify.com/user/srinivasnaik2"
                },
                "href": "https://api.spotify.com/v1/users/srinivasnaik2",
                "id": "srinivasnaik2",
                "type": "user",
                "uri": "spotify:user:srinivasnaik2"
              },
              "is_local": false,
              "primary_color": null,
              "track": {
                "album": {
                  "album_type": "album",
                  "artists": [
                    {
                      "external_urls": {
                        "spotify": "https://open.spotify.com/artist/4V8Sr092TqfHkfAA5fXXqG"
                      },
                      "href": "https://api.spotify.com/v1/artists/4V8Sr092TqfHkfAA5fXXqG",
                      "id": "4V8Sr092TqfHkfAA5fXXqG",
                      "name": "Luis Fonsi",
                      "type": "artist",
                      "uri": "spotify:artist:4V8Sr092TqfHkfAA5fXXqG"
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
                    "spotify": "https://open.spotify.com/album/3dnAanoquMtbaksF7pUjyI"
                  },
                  "href": "https://api.spotify.com/v1/albums/3dnAanoquMtbaksF7pUjyI",
                  "id": "3dnAanoquMtbaksF7pUjyI",
                  "images": [
                    {
                      "height": 640,
                      "url": "https://i.scdn.co/image/a43f2f184a34bbcdb2b282de9e0c1f84d9d19396",
                      "width": 640
                    },
                    {
                      "height": 300,
                      "url": "https://i.scdn.co/image/d2f23df7dce5b30d6e6feb34876107198f5bd51a",
                      "width": 300
                    },
                    {
                      "height": 64,
                      "url": "https://i.scdn.co/image/90b70c4530d6da63b8929b41036061b1e795df54",
                      "width": 64
                    }
                  ],
                  "name": "8",
                  "release_date": "2014-01-01",
                  "release_date_precision": "day",
                  "type": "album",
                  "uri": "spotify:album:3dnAanoquMtbaksF7pUjyI"
                },
                "artists": [
                  {
                    "external_urls": {
                      "spotify": "https://open.spotify.com/artist/4V8Sr092TqfHkfAA5fXXqG"
                    },
                    "href": "https://api.spotify.com/v1/artists/4V8Sr092TqfHkfAA5fXXqG",
                    "id": "4V8Sr092TqfHkfAA5fXXqG",
                    "name": "Luis Fonsi",
                    "type": "artist",
                    "uri": "spotify:artist:4V8Sr092TqfHkfAA5fXXqG"
                  },
                  {
                    "external_urls": {
                      "spotify": "https://open.spotify.com/artist/3nlpTZci9O5W8RsNoNH559"
                    },
                    "href": "https://api.spotify.com/v1/artists/3nlpTZci9O5W8RsNoNH559",
                    "id": "3nlpTZci9O5W8RsNoNH559",
                    "name": "Juan Luis Guerra 4.40",
                    "type": "artist",
                    "uri": "spotify:artist:3nlpTZci9O5W8RsNoNH559"
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
                "duration_ms": 221946,
                "episode": false,
                "explicit": false,
                "external_ids": {
                  "isrc": "USUM71404553"
                },
                "external_urls": {
                  "spotify": "https://open.spotify.com/track/609SDGj0txmlAXRrpwee9Y"
                },
                "href": "https://api.spotify.com/v1/tracks/609SDGj0txmlAXRrpwee9Y",
                "id": "609SDGj0txmlAXRrpwee9Y",
                "is_local": false,
                "name": "Llegaste Tú",
                "popularity": 61,
                "preview_url": "https://p.scdn.co/mp3-preview/2ae78b7c7990adccc88d0ea720352f6f8bdf4b4d?cid=774b29d4f13844c495f206cafdad9c86",
                "track": true,
                "track_number": 8,
                "type": "track",
                "uri": "spotify:track:609SDGj0txmlAXRrpwee9Y"
              },
              "video_thumbnail": {
                "url": null
              }
            }
          ],
          "limit": 100,
          "next": null,
          "offset": 0,
          "previous": null,
          "total": 6
        },
        "type": "playlist",
        "uri": "spotify:user:srinivasnaik2:playlist:448afXA6d1uP2qrq5r8A2n"
      }
}