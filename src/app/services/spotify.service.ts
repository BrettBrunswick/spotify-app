import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  private searchUrl: string;
  authToken: string;

  constructor(private _http:Http) { 

  }

  searchMusic (str: string, type='artist') {
    let header = new Headers();
    this.authToken = "BQDx6O-KJ24SgQ9hISALqd0KrjFJUioyrXtN9EYqXjkHbdnM4Hf00HHjS-pShniec2xZLbh9PnLKTdvQHqk";

    header.append("Authorization", "Bearer " + this.authToken);
    this.searchUrl = 'https://api.spotify.com/v1/search?query=' +str+ '&offset=0&limit=20&type=' +type+ '&market=US';
    return this._http.get(this.searchUrl, {headers: header})
    .map(res => res.json());
  }




}
