import { Component, OnInit } from '@angular/core';
import { User } from '../Entities/user';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  user: User;
  constructor() {
    this.user = new User();
  }

  ngOnInit(): void {
  }

}
