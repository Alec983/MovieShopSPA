import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GenresComponent } from './genres/genres.component';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { CreateMovieComponent } from './admin/create-movie/create-movie.component';
import { CreateCastComponent } from './admin/create-cast/create-cast.component';
import { PurchasesComponent } from './account/purchases/purchases.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { UpdateMovieComponent } from './admin/update-movie/update-movie.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { FavoritesComponent } from './account/favorites/favorites.component';
import {HttpClientModule} from '@angular/common/http';
import { MovieCardComponent } from './shared/components/movie-card/movie-card.component';
@NgModule({// decortar in ng
  declarations: [
    AppComponent,
    HomeComponent,
    GenresComponent,
    LoginComponent,
    SignUpComponent,
    CreateMovieComponent,
    CreateCastComponent,
    PurchasesComponent,
    HeaderComponent,
    MovieListComponent,
    NotFoundComponent,
    UpdateMovieComponent,
    MovieDetailsComponent,
    FavoritesComponent,
    MovieCardComponent
  ],
  imports: [
    NgbModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }// ts class
// ng atleast have one moudule (default moudle)
