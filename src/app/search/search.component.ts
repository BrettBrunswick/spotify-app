import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../services/spotify.service';
import { Artist } from '../models/artist';
import { RouterModule, Routes } from '@angular/router';
import { AppRouterModule } from '../router/router.module';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  providers: [SpotifyService],
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

searchStr: string;
searchRes: Artist[];
clientSecret : string;
authURL: string;
authKey: string;

constructor(private _spotifyService:SpotifyService) { 

}

  searchMusic() {
   this._spotifyService.searchMusic(this.searchStr)
   .subscribe(res => {
     this.searchRes = res.artists.items;
   })
  }

  getArtist() {
    this._spotifyService.searchMusic(this.searchStr)
    .subscribe(res => {
      this.searchRes = res.artists.items;
    })
   }


  ngOnInit() {
    this.clientSecret = 
    "Y2M5ZjgzZWM1NGRkNDVlYTg1NGEzZDdhNmRmOGU2ZjY6YjNhY2FkMDc4YjkxNDNlZTkwNzgxMzBlNGJiNDVjZTI=";
    this.authURL = "https://accounts.spotify.com/api/token";
    this._spotifyService.getAuthToken(this.clientSecret, this.authURL)
    .subscribe(res => {
      this.authKey = res.access_token;
    })

    
    
  }

}
