const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {}, 
    private: false
};

for(let i=0; i<numberOfFilms; i++){
    const a = prompt('Один из последних фильмов?', '');
    const b = prompt('На сколько оцените?', '');

    if(a != null && b != null
         && a != '' && b != '' 
         && a.length < 50 && b.length < 50){
        personalMovieDB.movies[a] = b;
        console.log('done');
    } 
    else{
        console.log('error');
        i--;
    }
}

console.log(personalMovieDB);
