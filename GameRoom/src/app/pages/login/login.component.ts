import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../Entities/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  actual_user: User;

  constructor(public route: Router) {
    // valido de tener el token en local storage, luego redirijo a home
    this.actual_user = new User();
   }

  ngOnInit(): void {
  }
  
  /**
   * Method in charge of login
   */
  login_user = (): void => {
    if (this.actual_user.login()) {
      this.redirect_to();
    }
  }

  /**
   * Redirects to the Home page
   */
  redirect_to = (): void => {
    this.route.navigateByUrl('/home');
  }

}
