const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {}, 
    private: false
};

const lastFilm = prompt("Один из последних просмотренных фильмов?", ''),
      estimation = prompt("На сколько оцените по 10-бальной шкале?", '');

// personalMovieDB.movies = {
//     lastFilm: estimation
// };

personalMovieDB.movies[lastFilm] = estimation;
