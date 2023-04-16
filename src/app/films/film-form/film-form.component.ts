import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, ParamMap, Router } from '@angular/router'

// Import Film Service
import { FilmService } from "../../services/film.service";

// Import Film Type
import { Film } from "../../types/film.interface";

@Component({
    selector: 'app-film-form',
    templateUrl: './film-form.component.html',
    styleUrls: ['./film-form.component.scss']
})
export class FilmFormComponent implements OnInit {

    public mode: string = 'create';
    private id!: string | any;
    private film!: Film;

    // create film form
    filmForm = this.formBuilder.group({
        title: ['', Validators.required],
        director: ['', Validators.required],
        releaseDate: ['', Validators.required],
        genre: ['', Validators.required],
        summary: ['', Validators.required]
    })

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        public route: ActivatedRoute,
        private filmService: FilmService
    ) { }

    ngOnInit(): void {
        // find out if we have a "id" or not
        this.route.paramMap.subscribe((paramMap: ParamMap) => {
            if (paramMap.has('id')) {
                this.mode = 'edit';
                this.id = paramMap.get('id')
                this.filmService.getFilm(this.id).subscribe((film) => {
                    this.film = film
                    // overrides values of initial form controls
                    this.filmForm.setValue({
                        // set value for every form control
                        title: this.film.title,
                        director: this.film.director,
                        releaseDate: this.film.releaseDate,
                        genre: this.film.genre,
                        summary: this.film.summary,
                    })
                })
            } else {
                this.mode = 'create';
                this.id = null
            }
        })
    }

    onSaveFilm() {
        if (this.mode === 'create') {
            this.filmService.addFilm(this.filmForm.value).subscribe(() => {
                // navigates back to homepage
                this.router.navigateByUrl('/')
            })
        } else {
            this.filmService.updateFilm(this.id, this.filmForm.value).subscribe(() => {
                // navigates back to homepage
                this.router.navigateByUrl('/')
            })
        }
    }
}
