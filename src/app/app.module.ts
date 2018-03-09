import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutComponent } from './about/about.component';
import { AppRouterModule } from './router/router.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchComponent } from './search/search.component';
import { SpotifyService } from './services/spotify.service';
import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutComponent,
    NotFoundComponent,
    SearchComponent,
    ArtistComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    FormsModule,
    HttpClientModule,
    HttpModule

  ],
  providers: [SpotifyService, HttpModule, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
