import { Component, Input } from '@angular/core';

// import the film type
import { Film } from 'src/app/types/film.interface';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.scss'],
})
export class FilmCardComponent {
  @Input() film!: Film;
}
