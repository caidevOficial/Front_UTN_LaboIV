import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InputComponent } from './input/input.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderBodyComponent } from './header-body/header-body.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent },
  {path: 'input', component: InputComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InputComponent,
    HomeComponent,
    HeaderBodyComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
