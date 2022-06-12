// interface can be used to create your own type - define fields and values
export interface Film {
    _id: string;
    title: string;
    director: string;
    releaseDate: string,
    genre: string;
    summary: string;
    imageUrl: string;
}

export interface Genre {
    value: string;
    viewValue: string;
}

export interface User {
    _id: string;
    name: string;
    email: string;
    password: string;
}