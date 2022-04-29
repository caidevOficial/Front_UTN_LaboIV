import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/Entities/movie';

@Component({
  selector: 'app-movies-table',
  templateUrl: './movies-table.component.html',
  styleUrls: ['./movies-table.component.css']
})
export class MoviesTableComponent implements OnInit {

  @Input() movies: Movie[] = [];
  /**
   * Receives a list of objects class Movie by parameter
   */
  constructor() {

  }

  ngOnInit(): void {
  }

}
