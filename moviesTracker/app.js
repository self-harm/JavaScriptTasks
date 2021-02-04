let numberOfFilms;

function start(){
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
    }
}

start();

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

if(personalMovieDB.count < 10){
    document.write("Просмотрено довольно мало фильмов..");
}
else if(personalMovieDB.count < 30){
    document.write("Вы - классический зритель!");
}
else {
    document.write("Вы - киноман!");
}

console.log(personalMovieDB);
