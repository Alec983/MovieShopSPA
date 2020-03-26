import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Genre } from 'src/app/shared/models/genres';
@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor(private apiservice : ApiService) { }
  getAllGenres() : Observable<Genre[]>{
    return this.apiservice.getAll('genres');
  }
}
