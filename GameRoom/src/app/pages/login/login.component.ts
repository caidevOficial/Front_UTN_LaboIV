import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../Entities/user';
import { LoadScriptsService } from '../../load-scripts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  harcoded: boolean;
  actual_user: User;

  constructor(public route: Router, private _load_scripts: LoadScriptsService) {
    // valido de tener el token en local storage, luego redirijo a home
    this.harcoded = false;
    this.actual_user = new User();
    this._load_scripts.load_assets_script([
      'Login/vendor/jquery/jquery-3.2.1.min',
      'Login/vendor/animsition/js/animsition.min',
      'Login/vendor/bootstrap/js/popper',
      'Login/vendor/bootstrap/js/bootstrap.min',
      'Login/vendor/select2/select2.min',
      'Login/vendor/daterangepicker/moment.min',
      'Login/vendor/daterangepicker/daterangepicker',
      'Login/vendor/countdowntime/countdowntime',
      'Login/js/main'
    ]);

    this._load_scripts.load_url_styles([
      "./assets/Login/images/login_icons/favicon.ico",
      "./assets/Login/vendor/bootstrap/css/bootstrap.min.css",
      "./assets/Login/fonts/font-awesome-4.7.0/css/font-awesome.min.css",
      "./assets/Login/fonts/iconic/css/material-design-iconic-font.min.css",
      "./assets/Login/vendor/animate/animate.css",
      "./assets/Login/vendor/css-hamburgers/hamburgers.min.css",
      "./assets/Login/vendor/animsition/css/animsition.min.css",
      "./assets/Login/vendor/select2/select2.min.css",
      "./assets/Login/vendor/daterangepicker/daterangepicker.css",
      "./assets/Login/css/util.css",
      "./assets/Login/css/main.css",
    ]);
  }

  ngOnInit(): void {
  }

  /**
   * Method in charge of login
   */
  login_user = (): void => {
    if (this.actual_user.login()) {
      this.redirect_to();
    }else{
      console.log("Wrong credentials or user not found");
    }
  }

  /**
   * If not exist a user with the actual credentials, 
   * it creates a new one, Then login and redirect to home
   */
  fast_access = (): void => {
    this.harcoded = true;
    let local_users = JSON.parse(localStorage.getItem('users') || '[]');
    this.actual_user.setUsername = 'admin';
    this.actual_user.setPassword = 'admin';
    this.actual_user.create_account(local_users);
    
    this.login_user();
  }

  /**
   * Redirects to the Home page
   */
  redirect_to = (): void => {
    this.route.navigateByUrl('/home');
  }

  /**
   * Redirects to the page passed as parameter
   */
  goto_signup = (): void => {
    this.route.navigateByUrl('/signup');
  } 

}
