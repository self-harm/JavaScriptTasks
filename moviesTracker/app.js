//1

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

//2

const personalMovieDB = {
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

console.log(25);