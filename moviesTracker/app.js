//objects
let numberOfFilms;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {}, 
    private: false
};

//implement functions
start();
rememberMyFilms();
detectPersonalLvl();
writeYourGenres();
showMyDB(personalMovieDB.private);

//all functions
function start(){
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
    }

    personalMovieDB.count = numberOfFilms;1
}

function rememberMyFilms(){
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
}

function detectPersonalLvl(){
    if(personalMovieDB.count < 10){
    document.write("Просмотрено довольно мало фильмов..");
    }
else if(personalMovieDB.count < 30){
    document.write("Вы - классический зритель!");
    }   
else {
    document.write("Вы - киноман!");
    }
}

function showMyDB(hidden){
    if(!hidden){
        console.log(personalMovieDB);  
    }
}

function writeYourGenres(){
    for(let i=1; i<4; i++){
        const lovelyGenre = prompt(`Ваш ${i} любимый жанр`);
        personalMovieDB.genres[i-1] = lovelyGenre;
    }
}




