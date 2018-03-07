import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  private searchUrl: string;
  authToken: string;

  constructor(private _http:Http) { 

  }

  /*getAuthToken(clientSecret: string, authURL: string) {
    let header = new Headers();
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("Authorization", "Basic " + clientSecret);
    return this._http.post(authURL, "grant_type=client_credentials", {headers: header})
    .map(res => res.json());
  }
  */

  searchMusic (str: string, type='artist') {
    let header = new Headers();
    this.authToken = "BQDEqdaLrWgzs050ocEVw-AecFbBRehYUMg3KpjabgBPsz9CYsrkHv_sIQzjsNRXyBl5POBcP1gfMCJx6QA";
    header.append("Authorization", "Bearer " + this.authToken);
    this.searchUrl = 'https://api.spotify.com/v1/search?query=' +str+ '&offset=0&limit=20&type=' +type+ '&market=US';
    return this._http.get(this.searchUrl, {headers: header})
    .map(res => res.json());
  }




}
