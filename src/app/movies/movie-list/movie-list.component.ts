import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/core/services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { MovieCard } from 'src/app/shared/models/movie-card';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies : MovieCard[];
  genreId : string;
  constructor(private movieService : MovieService, private activedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activedRoute.paramMap.subscribe(
      param => {
        this.genreId = param.get('id');
        console.log(this.genreId);
        this.movieService.getMoviesByGenre(this.genreId).subscribe(
          m => {
            this.movies = m;
            console.log("MovieCards Information below ：");
            console.log(this.movies);
          }
        );
      }
      
    );
    
  }

}
