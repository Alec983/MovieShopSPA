import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/core/services/movie.service';
import {MovieDetail} from '../../shared/models/moviedetail'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
  inputs: [`id`]
})
export class MovieDetailsComponent implements OnInit {
  moviedetail : MovieDetail;
  id: string;
  year: any;
  constructor(private _Activatedroute:ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {
    console.log("1-------------"+this.id);
    this._Activatedroute.paramMap.subscribe(params => { 
      this.id = params.get('id'); 
      this.movieService.getMovieDetail(this.id).subscribe(
        md => {
          this.moviedetail = md;
          
          this.year = new Date(this.moviedetail.releaseDate).getFullYear();
          console.log('MovieDetail : '+this.year)
          console.log(this.moviedetail);
        }
      );
    });
    
  }

}
