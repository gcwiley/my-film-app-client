import { Component, OnInit } from '@angular/core';

// import the film service
import { FilmService } from '../../services/film.service';

// impor the film type
import { Film } from '../../types/film.interface';

@Component({
  selector: 'app-film-grid',
  templateUrl: './film-grid.component.html',
  styleUrls: ['./film-grid.component.scss'],
})
export class FilmGridComponent implements OnInit {
  films: Film[] = [];

  constructor(public filmService: FilmService) {}

  ngOnInit(): void {
    this.getFilms();
  }

  getFilms(): void {
    this.filmService.getFilms().subscribe((films) => {
      this.films = films;
    });
  }
}
