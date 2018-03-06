import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  providers: [SpotifyService],
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

searchStr: string;

constructor(private _spotifyService:SpotifyService) { 

}

  searchMusic() {
   this._spotifyService.searchMusic(this.searchStr)
   .subscribe(res => {
     console.log(res.artists.items);
   })
  }


  ngOnInit() {

  }

}
