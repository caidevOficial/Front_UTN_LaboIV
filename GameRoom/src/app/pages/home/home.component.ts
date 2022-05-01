import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from '../../load-scripts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
    this.show_header();
  }

  ngOnInit(): void {
  }

  show_header = (): void => {
    let header = document.getElementsByTagName('header')[0];
    header.classList.remove('hidden');
  }
}
