import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorsComponent } from './pages/actors/actors.component';
import { AddActorsComponent } from './pages/actors/add-actors/add-actors.component';
import { ListActorsComponent } from './pages/actors/list-actors/list-actors.component';
import { AddMoviesComponent } from './pages/movies/add-movies/add-movies.component';
import { ListMoviesComponent } from './pages/movies/list-movies/list-movies.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { SearchComponent } from './pages/search/search.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'search', component: SearchComponent },
  {
    path: 'actor', component: ActorsComponent, children: [
      { path: 'add', component: AddActorsComponent },
      { path: 'list', component: ListActorsComponent },
    ]
  },
  {
    path: 'movies', component: MoviesComponent, children: [
      { path: 'add', component: AddMoviesComponent },
      { path: 'list', component: ListMoviesComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
