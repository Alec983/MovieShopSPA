import { Component, OnInit } from '@angular/core';
import { GenresService } from '../core/services/genres.service';
import { Genre } from '../shared/models/genres';
@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {
  genres: Genre[];
  constructor(private genreServices:GenresService) { }

  ngOnInit(): void {
    this.genreServices.getAllGenres().subscribe(
      g => {
        this.genres = g;
        //console.log(this.genres);
      }
    );
  }

}
