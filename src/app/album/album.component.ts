import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import { RouterModule, Routes } from '@angular/router';
import { AppRouterModule } from '../router/router.module';
import { Album } from '../models/album';
import { Artist } from '../models/artist';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  id: string;
  album: Album[];

  
  constructor(private _spotifyService:SpotifyService,
  private _route:ActivatedRoute) {


  }

  ngOnInit() {

    this._route.params.map(params =>params['id']).subscribe((id) => {
      this._spotifyService.getAlbum(id).subscribe(album => {
        this.album = album;
      })
    })

  }


}
