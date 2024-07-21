import { Display } from './display.module.js';

export class Home {
    constructor() {
        console.log('hello');
        this.display = new Display();
        this.getMovies();
    }

    async getMovies() {
        try {
            const api = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=77e8d8dbacb3ebedc3af73beeb967ee4');
            const response = await api.json();
            this.display.displayMovies(response.results); // Pass the movie data to displayMovies
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    }


    

}








