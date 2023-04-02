import { Component, OnInit } from '@angular/core';

// Import Films Service
import { FilmService } from '../../services/film.service';

// Import Film Type
import { Film } from '../../types/types';

@Component({
  selector: 'app-film-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.scss'],
})
export class FilmsListComponent implements OnInit {

  isLoadingFilms = true;
  films: Film[] = [];

  constructor(public filmService: FilmService) { }

  ngOnInit(): void {
    this.getFilms()
  }

  getFilms(): void {
    this.filmService.getFilms().subscribe((films) => {
      this.films = films
      this.isLoadingFilms = false
    })
  }
}
