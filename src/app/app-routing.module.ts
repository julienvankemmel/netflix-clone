import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AfficheFilmComponent } from './affiche-film/affiche-film.component';
import { AfficheSerieComponent } from './affiche-serie/affiche-serie.component';
import { DetailFilmComponent } from './detail-film/detail-film.component';
import { DetailSerieComponent } from './detail-serie/detail-serie.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'films', component:AfficheFilmComponent},
  {path:'series', component:AfficheSerieComponent},
  {path:'detailfilm/:id', component:DetailFilmComponent},
  {path:'detailserie/:id', component:DetailSerieComponent},
  {path:'search/:find', component:SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
