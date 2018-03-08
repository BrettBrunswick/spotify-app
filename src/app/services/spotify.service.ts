import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  private searchUrl: string;
  private artistUrl: string;
  private albumsUrl: string;
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
    this.authToken = "BQDaK6FhuHQ_7miprhqgSAx75lWSpZM6uE4CZLLzlW5wZ_PDreRfd2hNK434-Fhu0vF4yM37wxRIVW6Nmls";
    header.append("Authorization", "Bearer " + this.authToken);
    this.searchUrl = 'https://api.spotify.com/v1/search?query=' +str+ '&offset=0&limit=20&type=' +type+ '&market=US';
    return this._http.get(this.searchUrl, {headers: header})
    .map(res => res.json());
  }

  getArtist (id: string) {
    let header = new Headers();
    this.authToken = "BQDaK6FhuHQ_7miprhqgSAx75lWSpZM6uE4CZLLzlW5wZ_PDreRfd2hNK434-Fhu0vF4yM37wxRIVW6Nmls";
    header.append("Authorization", "Bearer " + this.authToken);
    this.artistUrl = 'https://api.spotify.com/v1/artists/' + id;
    return this._http.get(this.artistUrl, {headers: header})
    .map(res => res.json());
  }

  getAlbums (artistId: string) {
    let header = new Headers();
    this.authToken = "BQDaK6FhuHQ_7miprhqgSAx75lWSpZM6uE4CZLLzlW5wZ_PDreRfd2hNK434-Fhu0vF4yM37wxRIVW6Nmls";
    header.append("Authorization", "Bearer " + this.authToken);
    this.albumsUrl = 'https://api.spotify.com/v1/artists/' + artistId + "/albums";
    return this._http.get(this.albumsUrl, {headers: header})
    .map(res => res.json());
  }





}
