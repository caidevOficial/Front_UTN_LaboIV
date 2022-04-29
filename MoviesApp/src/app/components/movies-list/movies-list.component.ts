import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/Entities/movie';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  @Input() movies: Movie[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
