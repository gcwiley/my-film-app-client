import { Component, OnInit } from '@angular/core';

// import the film service
import { FilmService } from 'src/app/services/film.service';

// import the film type
import { Film } from 'src/app/types/film.interface';

@Component({
  selector: 'app-recent-films',
  templateUrl: './recent-films.component.html',
  styleUrls: ['./recent-films.component.scss'],
})
export class RecentFilmsComponent implements OnInit {
  recentFilms!: Film[];

  constructor(private filmService: FilmService) {}

  ngOnInit(): void {
    this.getRecentFilms();
  }

  getRecentFilms(): void {
    this.filmService
      .getRecentFilms()
      .subscribe((recentFilms) => (this.recentFilms = recentFilms));
  }
}
