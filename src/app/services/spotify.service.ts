import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  private searchUrl: string;
  private artistUrl: string;
  private albumsUrl: string;
  private albumUrl: string;
  clientSecret: string;
  authURL: string;
  authToken: string;

  constructor(private _http:Http) {
   /* this.clientSecret = "Y2M5ZjgzZWM1NGRkNDVlYTg1NGEzZDdhNmRmOGU2ZjY6YjNhY2FkMDc4YjkxNDNlZTkwNzgxMzBlNGJiNDVjZTI=";
    this.authURL = "https://accounts.spotify.com/api/token";
    let header = new Headers();
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("Authorization", "Basic " + this.clientSecret);
    this._http.post(this.authURL, "grant_type=client_credentials", {headers: header})
    .map(res => res.json())
    .subscribe(res => {this.authToken = res.access_token})
*/
    this.authToken = 'BQDlHO4Xhsyya55hU6N-Ce4SA5uXRea9z2bKWHDZR70l60vXjF0VDuM4cm6G4MPeAkQc7SXx0RSMqKtpk28';
  }

  getAuthToken(clientSecret: string, authURL: string) {
    let header = new Headers();
    header.append("Authorization", "Basic " + clientSecret);
    header.append("Content-Type", "application/x-www-form-urlencoded");
    return this._http.post(authURL, "grant_type: client_credentials", {headers: header})
    .map(res => res.json());
  }
  

  searchMusic (str: string, type='artist') {
    let header = new Headers();
    //this.authToken = "BQAqKqXZNBkUeOdVm-qYau_1DgrLmpKMnWZWmyFRZpda2tWSixFSKgPXgW5ApgWS9nLdZiDNjkr1GBT0k4Y";
    header.append("Authorization", "Bearer " + this.authToken);
    this.searchUrl = 'https://api.spotify.com/v1/search?query=' +str+ '&offset=0&limit=20&type=' +type+ '&market=US';
    return this._http.get(this.searchUrl, {headers: header})
    .map(res => res.json());
  }

  getArtist (id: string) {
    let header = new Headers();
    //this.authToken = "BQAqKqXZNBkUeOdVm-qYau_1DgrLmpKMnWZWmyFRZpda2tWSixFSKgPXgW5ApgWS9nLdZiDNjkr1GBT0k4Y";
    header.append("Authorization", "Bearer " + this.authToken);
    this.artistUrl = 'https://api.spotify.com/v1/artists/' + id;
    return this._http.get(this.artistUrl, {headers: header})
    .map(res => res.json());
  }

  getAlbums (artistId: string) {
    let header = new Headers();
    //this.authToken = "BQAqKqXZNBkUeOdVm-qYau_1DgrLmpKMnWZWmyFRZpda2tWSixFSKgPXgW5ApgWS9nLdZiDNjkr1GBT0k4Y";
    header.append("Authorization", "Bearer " + this.authToken);
    this.albumsUrl = 'https://api.spotify.com/v1/artists/' + artistId + "/albums";
    return this._http.get(this.albumsUrl, {headers: header})
    .map(res => res.json());
  }

  getAlbum (albumId: string) {
    let header = new Headers();
    //this.authToken = "BQAqKqXZNBkUeOdVm-qYau_1DgrLmpKMnWZWmyFRZpda2tWSixFSKgPXgW5ApgWS9nLdZiDNjkr1GBT0k4Y";
    header.append("Authorization", "Bearer " + this.authToken);
    this.albumUrl = 'https://api.spotify.com/v1/albums/' + albumId;
    return this._http.get(this.albumUrl, {headers: header})
    .map(res => res.json());
  }



}
