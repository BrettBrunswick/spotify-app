import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
import { AboutComponent } from '../about/about.component';
import { SearchComponent } from '../search/search.component';
import { ArtistComponent } from '../artist/artist.component';
import { AlbumComponent } from '../album/album.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'artist/:id', component: ArtistComponent },
  { path: 'album/:id', component: AlbumComponent },
  { path: '', component: SearchComponent, pathMatch: 'full'},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRouterModule { }
