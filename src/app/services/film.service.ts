import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// Import the Film Model
import { Film } from '../types/film.interface'

@Injectable({
    providedIn: 'root'
})

export class FilmService {

    private filmsUrl = 'api/films';

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    // Inject "HttpClient" into the Film Service
    constructor(private http: HttpClient) { }

    // GET films from the server
    getFilms(): Observable<Film[]> {
        return this.http.get<Film[]>(this.filmsUrl)
    }

    // GET Film by Id - Will 404 if id is not found
    getFilm(id: string): Observable<Film> {
        const url = `${this.filmsUrl}/${id}`
        return this.http.get<Film>(url)
    }

    // SAVE METHODS

    // POST: add a new Film to the server
    addFilm(newFilm: Film): Observable<Film> {
        return this.http.post<Film>(this.filmsUrl, newFilm, this.httpOptions)
    }

    // DELETE film by Id from the server
    deleteFilm(id: string): Observable<Film[]> {
        const url = `${this.filmsUrl}/${id}`
        return this.http.delete<Film[]>(url, this.httpOptions)
    }

    // PATCH: update film on the server
    updateFilm(id: string, film: Film): Observable<any> {
        const url = `${this.filmsUrl}/${id}`
        return this.http.patch(url, film, this.httpOptions)
    }
}
