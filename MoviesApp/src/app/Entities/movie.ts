export enum M_Type {
    terror,
    comedy,
    romantic,
    other
}

export class Movie {
    id: number = 0;
    name: string = '';
    movie_type: M_Type = M_Type.other;
    year: number = 0;
    amount_public: number = 0;
    movie_photo: string = '';

    /**
     *
     */
    constructor(id: number, name: string, movie_type: M_Type, year: number, amount_public: number, movie_photo: string) {
        this.Movie_ID = id;
        this.Movie_Name = name;
        this.Movie_Type = movie_type;
        this.Movie_Year = year;
        this.Amount_Public = amount_public;
        this.Movie_Photo = movie_photo;
    }

    get Movie_ID(): number {
        return this.id;
    }

    get Movie_Name(): string {
        return this.name;
    }

    get Movie_Type(): M_Type {
        return this.movie_type;
    }

    get Movie_Year(): number {
        return this.year;
    }

    get Amount_Public(): number {
        return this.amount_public;
    }

    get Movie_Photo(): string {
        return this.movie_photo;
    }

    set Movie_ID(id: number) {
        this.id = id;
    }

    set Movie_Name(name: string) {
        this.name = name;
    }

    set Movie_Type(movie_type: M_Type) {
        this.movie_type = movie_type;
    }

    set Movie_Year(year: number) {
        this.year = year;
    }

    set Amount_Public(amount_public: number) {
        this.amount_public = amount_public;
    }

    set Movie_Photo(movie_photo: string) {
        this.movie_photo = movie_photo;
    }

}
