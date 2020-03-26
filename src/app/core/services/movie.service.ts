import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { MovieCard } from 'src/app/shared/models/movie-card';
import { MovieDetail } from 'src/app/shared/models/moviedetail';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private apiService: ApiService) { }
  
  getTopRevenueMovies(): Observable<MovieCard[]>{
    return this.apiService.getAll('movies/toprevenue');
  }
  
  getMovieDetail(id: string):Observable<MovieDetail>{
    return this.apiService.getOne('movies/'+id);
  }

  getMoviesByGenre(genreId: string): Observable<MovieCard[]> {
    console.log("getMoviesByGenre Method:"+'movies/genre/'+genreId)
    return this.apiService.getAll('movies/genre/'+genreId);
  }
}
