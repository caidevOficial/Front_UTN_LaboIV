import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './pages/about/about.component';
import { GamesComponent } from './pages/games/games.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NavVarComponent } from './components/nav-var/nav-var.component';
import { GitRibbonComponent } from './components/git-ribbon/git-ribbon.component';
import { NavLinksComponent } from './components/nav-links/nav-links.component';
import { FormsModule } from '@angular/forms';
import { IconComponent } from './components/icon/icon.component';

// const firebase = require("firebase");
// // Required for side-effects
// require("firebase/firestore");

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    GamesComponent,
    NotFoundComponent,
    NavVarComponent,
    GitRibbonComponent,
    NavLinksComponent,
    IconComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
