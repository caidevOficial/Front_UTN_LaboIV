import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InputComponent } from './input/input.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderBodyComponent } from './header-body/header-body.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorComponent } from './error/error.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent},
  {path: 'login', component: LoginComponent },
  {path: 'error', component: ErrorComponent },
  {path: 'input', component: InputComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InputComponent,
    HeaderBodyComponent,
    FooterComponent,
    ErrorComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
