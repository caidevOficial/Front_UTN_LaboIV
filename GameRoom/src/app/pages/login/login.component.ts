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

  actual_user: User;

  constructor(public route: Router, private _load_scripts: LoadScriptsService) {
    // valido de tener el token en local storage, luego redirijo a home
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
