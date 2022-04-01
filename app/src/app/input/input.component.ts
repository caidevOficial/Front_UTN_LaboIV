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

  /**
   * Sets the fields in 0
   */
  clear(){
    this.user.age_1 = 0;
    this.user.age_2 = 0;
    this.user.mean_ages = 0;
    this.user.sum_ages = 0;
  }

}
