'use strict';

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let lastWatchedFilmName = prompt("Один из последних просмотренных фильмов?", "");
let lastWatchedFilmMark = +prompt("На сколько вы оцените его?", "");

personalMovieDB.movies[lastWatchedFilmName] = lastWatchedFilmMark;

console.log(personalMovieDB);