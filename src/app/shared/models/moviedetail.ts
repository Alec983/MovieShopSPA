import {Cast} from './Cast';
import {Genre} from './genres';
export interface MovieDetail {
    id: number;
    title: string;
    posterUrl: string;
    backdropUrl: string;
    rating: number;
    overview: string;
    tagline: string;
    budget: number;
    revenue: number;
    imdbUrl: string;
    tmdbUrl: string;
    releaseDate: Date;
    runTime: number;
    price: number;
    favoritesCount: number;
    casts: Cast[];
    genres: Genre[];
}