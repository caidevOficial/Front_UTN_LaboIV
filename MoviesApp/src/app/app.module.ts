import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { SearchComponent } from './pages/search/search.component';
import { ActorsComponent } from './pages/actors/actors.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { AddActorsComponent } from './pages/actors/add-actors/add-actors.component';
import { ListActorsComponent } from './pages/actors/list-actors/list-actors.component';
import { ListMoviesComponent } from './pages/movies/list-movies/list-movies.component';
import { AddMoviesComponent } from './pages/movies/add-movies/add-movies.component';
import { MoviesTableComponent } from './components/movies-table/movies-table.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SearchComponent,
    ActorsComponent,
    MoviesComponent,
    AddActorsComponent,
    ListActorsComponent,
    ListMoviesComponent,
    AddMoviesComponent,
    MoviesTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
