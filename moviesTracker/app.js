//1

var numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", '');

//2

personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {}, 
    private: false
};

//3

var lastFilm = prompt("Один из последних просмотренных фильмов?", '');
var estimation = prompt("На сколько оцените по 10-бальной шкале?", '');

personalMovieDB.movies = {
    lastFilm: estimation
};

console.log(personalMovieDB.movies.lastFilm);