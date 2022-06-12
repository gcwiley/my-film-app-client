import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Film } from '../../types'
import { FilmService } from '../film.service'

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {

  isLoading = true;
  film: Film | any

  constructor(
    private route: ActivatedRoute,
    private filmService: FilmService
  ) { }

  ngOnInit(): void {
    this.getFilm()
  }

  // GET film by id
  getFilm(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.filmService.getFilm(id).subscribe((film) => this.film = film)
  }
}
