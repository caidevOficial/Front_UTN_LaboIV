import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Entities/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;

  constructor() {
    this.user = new User();
  }

  ngOnInit(): void {
  }

}

