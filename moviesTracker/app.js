//objects

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [], 
    private: false,
    start: function(){
        this.count = +prompt("Сколько фильмов вы уже посмотрели?", '');
        while(this.count == '' || this.count == null || isNaN(this.count)){
            this.count = +prompt("Сколько фильмов вы уже посмотрели?", '');
        }
    },
    toggleVisibleMyDB: function(){
        if(this.private){
            this.private=false;
        }
        else{
            this.private=true;
        }
    },
    rememberMyFilms: function(){
        for(let i=0; i<this.count; i++){
            const a = prompt('Один из последних фильмов?', '');
            const b = prompt('На сколько оцените?', '');
        
            if(a != null && b != null
                 && a != '' && b != '' 
                 && a.length < 50 && b.length < 50){
                this.movies[a] = b;
                console.log('done');
            } 
            else{
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLvl: function(){
        if(personalMovieDB.count < 10){
            document.write("Просмотрено довольно мало фильмов..");
            }
        else if(personalMovieDB.count < 30){
            document.write("Вы - классический зритель!");
            }   
        else {
            document.write("Вы - киноман!");
            }
    },
    showMyDB: function(){
        if(!this.private){
            console.log(personalMovieDB);  
        }
    },
    writeYourGenres: function(){

        for(let i=1; i<4; i++){
            let genre = prompt(`Ваш ${i} любимый жанр`);

            if(genre == '' || genre == null) {
                console.log('sdf');
                // alert('Вы ввели некорректные данные!');
                i--;
            }
            else{
                personalMovieDB.genres[i-1] = genre; 
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i+1} - ${item}!`);
        });
    } 
};

//implement funct1ions
personalMovieDB.writeYourGenres();
