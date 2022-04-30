import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Entities/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  actual_user: User;
  constructor(public route: Router) { 
    this.actual_user = new User();
  }

  ngOnInit(): void {
  }

  /**
   * Creates the user account in the localStorage.
   */
  create_account = (): boolean => {
    if (this.actual_user.getPassword != null &&
      this.actual_user.getPassword != null) {
        let local_users = JSON.parse(localStorage.getItem('users') || '[]');
        if(this.actual_user.create_account(local_users)){
            alert('Account created successfully')
            this.redirect_to('home');
          } else{
            alert('Error creating account. User null or already exists');
          }
    }
    return true;
  } 

  /**
   * Redirects to the Home page
   */
   redirect_to = (page: string): void => {
    this.route.navigateByUrl(`/${page}`);
  }
}
