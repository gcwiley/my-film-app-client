import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs';

// import the message service
import { MessageService } from './message.service';

// Import the film type
import { Film } from '../types/film.interface';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  private filmsUrl = 'api/films'; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  // Inject "HttpClient" into the Film Service
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  // GET films from the server
  getFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(this.filmsUrl);
  }

  // GET Film by Id - Will 404 if id is not found
  getFilm(id: string): Observable<Film> {
    const url = `${this.filmsUrl}/${id}`;
    return this.http.get<Film>(url);
  }

  // GET films whose name contains search term - SEARCH
  searchFilms(term: string): Observable<Film[]> {
    if (!term.trim()) {
      // if no search term, return an empty project array
      return of([]);
    }
    return this.http.get<Film[]>(`${this.filmsUrl}/?name=${term}`).pipe(
      tap((x) =>
        x.length
          ? this.log(`found films matching "${term}"`)
          : this.log(`no films matching "${term}"`)
      ),
      catchError(this.handleError<Film[]>(`searchFilms`, []))
    );
  }

  // GET: film count from database
  getFilmCount(): Observable<number> {
    return this.http.get<number>('/api/film-count');
  }

  // GET: recent films added
  getRecentFilms(): Observable<Film[]> {
    return this.http.get<Film[]>('/api/recent-films');
  }

  // SAVE METHODS

  // POST: add a new Film to the server
  addFilm(newFilm: Film): Observable<Film> {
    return this.http.post<Film>(this.filmsUrl, newFilm, this.httpOptions);
  }

  // DELETE film by Id from the server
  deleteFilm(id: string): Observable<Film[]> {
    const url = `${this.filmsUrl}/${id}`;
    return this.http.delete<Film[]>(url, this.httpOptions);
  }

  // PATCH: update film on the server
  updateFilm(id: string, film: Film): Observable<any> {
    const url = `${this.filmsUrl}/${id}`;
    return this.http.patch(url, film, this.httpOptions);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // let the app keep running by return an empty result
      return of(result as T);
    };
  }

  // Log a ProjectService message with ProjectService
  private log(message: string): void {
    return this.messageService.add(`ProjectService: ${message}`);
  }
}
