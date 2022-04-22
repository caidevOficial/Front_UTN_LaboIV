import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/Entities/movie';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

movies: Movie[] = []

  constructor(private movie: Movie) { }

  ngOnInit(): void {
  }

}
