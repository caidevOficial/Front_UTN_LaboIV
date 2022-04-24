import { Component, OnInit } from '@angular/core';
import { Movie, M_Type } from 'src/app/Entities/movie';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

movies: Movie[] = [
  new Movie(1, 'The Shawshank Redemption', M_Type.other, 1994, 10, 'https://m.media-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SY1000_CR0,0,674,1000_AL_.jpg'),
  new Movie(2, 'The Godfather', M_Type.other, 1972, 10, 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,666,1000_AL_.jpg'),
]

  constructor() { }

  ngOnInit(): void {
  }

}
