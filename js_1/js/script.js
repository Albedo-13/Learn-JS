'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let lastWatchedFilmName;
let lastWatchedFilmMark;

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        lastWatchedFilmName = prompt("Один из последних просмотренных фильмов?", "");
        lastWatchedFilmMark = +prompt("На сколько вы оцените его?", "");
        if (lastWatchedFilmName == '' || lastWatchedFilmMark == '' ||
            lastWatchedFilmName == null || lastWatchedFilmMark == null ||
            lastWatchedFilmName.length > 50 || lastWatchedFilmMark.length > 50) {
            console.log("Введен мусор");
            i--;
        } else {
            personalMovieDB.movies[lastWatchedFilmName] = lastWatchedFilmMark;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10 && personalMovieDB.count >= 0) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count <= 30 && personalMovieDB.count >= 10) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
    console.log(personalMovieDB);
}

detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.privat === false) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i + 1}`, ""));
    }
}

writeYourGenres();