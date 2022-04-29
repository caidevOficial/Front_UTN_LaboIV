import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { DungeonComponent } from './pages/games/dungeon/dungeon.component';
import { GamesComponent } from './pages/games/games.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SignupComponent } from './pages/signup/signup.component';
import { TimeComponent } from './pages/time/time.component';

// ?# Routes of the application
const routes: Routes = [
  { path: 'home', component: HomeComponent, children: [
    { path: 'games/dungeon', component: DungeonComponent }
    //, { path: '**', component: NotFoundComponent }
    //, {path: 'questions', component: QuestionsComponent}
  ]}
  //{path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)},
  ,{ path: 'login', component: LoginComponent}
  ,{ path: 'signup', component: SignupComponent }
  ,{ path: 'about', component: AboutComponent }
  ,{ path: 'time', component: TimeComponent }
  ,{ path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
