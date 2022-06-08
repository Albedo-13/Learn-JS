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

//
function calculateVolumeAndArea(edgeOfCube) {
    if (edgeOfCube % 1 !== 0 || edgeOfCube < 0 || typeof (edgeOfCube) == 'string') {
        return "При вычислении произошла ошибка";
    }
    return `Объем куба: ${Math.pow(edgeOfCube, 3)}, площадь всей поверхности: ${6 * Math.pow(edgeOfCube, 2)}`;
}

calculateVolumeAndArea(5);
calculateVolumeAndArea(15);
calculateVolumeAndArea(15.5);
calculateVolumeAndArea('15');
calculateVolumeAndArea(-15);

function getCoupeNumber(ticketNumber) {
    if (ticketNumber === 0 || ticketNumber > 36) {
        return "Таких мест в вагоне не существует";
    } else if (ticketNumber % 1 !== 0 || ticketNumber < 0 || typeof (ticketNumber) == 'string') {
        return "Ошибка. Проверьте правильность введенного номера места";
    }
    return parseInt((3 + ticketNumber) / 4);
}

console.log(getCoupeNumber(33));
console.log(getCoupeNumber(7));
console.log(getCoupeNumber(300));
console.log(getCoupeNumber(0));
console.log(getCoupeNumber(7.7));
console.log(getCoupeNumber(-10));
console.log(getCoupeNumber('Hello'));

function getTimeFromMinutes(totalMinutes) {
    if (totalMinutes % 1 !== 0 || totalMinutes < 0 || typeof (totalMinutes) == 'string') {
        return "Ошибка, проверьте данные";
    }

    const hours = parseInt(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    let declension = "ERROR";

    switch (hours) {
        case 1:
            declension = "час";
            break;
        case 2:
        case 3:
        case 4:
            declension = "часа";
            break;
        default:
            declension = "часов";
            break;
    }

    return `Это ${hours} ${declension} и ${minutes} минут`;
}

console.log(getTimeFromMinutes(150));
console.log(getTimeFromMinutes(110));
console.log(getTimeFromMinutes(50));
console.log(getTimeFromMinutes(0));
console.log(getTimeFromMinutes(-150));

function findMaxNumber(a, b, c, d) {
    if (typeof(a) != 'number' || typeof(b) != 'number' || typeof(c) != 'number' || typeof(d) != 'number') {
        return 0;
    }

    return Math.max(a, b, c, d);
}

console.log(findMaxNumber(1, 5, 6.6, 11));
console.log(findMaxNumber(1, 5, "6", "10"));

const options = {
    name: "test",
    width: 1920,
    height: 1080,
    colors: {
        red: "01 ",
        green: " 2A  ",
        blue: "F3 ",
    },
    getColor: function() {
        // Метод обьекта (JS - обьектно-ориентированный, т.е. все - обьект)
        return this.colors.red.trim() + this.colors.green.trim() + this.colors.blue.trim();
    }
};

const color = options.getColor();
console.log(color);
console.log(Object.keys(options));  // Получение ключей обьекта в виде массива строк
// const {red, green, blue} = options.colors;  // Деструктуризация
const {red, green, blue} = {...options.colors}; // Деструктуризация (крутая)
console.log(red);

for (let i in options) {
    if (typeof(options[i]) === 'object') {
        for (let j in options[i]) {
            console.log(`${j} = ${options[i][j]}`);
        }
    } else {
        console.log(`${i} = ${options[i]}`);
    }
}

const copyObj1 = Object.assign({}, options);
const copyObj2 = {...options};
copyObj2.height = 2000;

console.log(options);
console.log(copyObj2);

//
const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(obj) {
        let result = `Мне ${obj.age} и я владею языками: `;
        for (let i in obj.skills.languages) {
            result += `${obj.skills.languages[i].toUpperCase()} `;
        }
        return result;
    }
};

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

function showProgrammingLangs(plan) {
    let result = "";
    for (let i in plan.skills.programmingLangs) {
        result += `Язык ${i} изучен на ${plan.skills.programmingLangs[i]}\n`;
    }
    return result;
}

console.log(showProgrammingLangs(personalPlanPeter));

//
const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    if (arr.length === 0) {
        return "Семья пуста";
    }
    return `Семья состоит из: ${family.join(' ')} `;
}

console.log(showFamily(family));

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    for(let i of arr) {
        console.log(i.toLowerCase());
    }
}

standardizeStrings(favoriteCities);

//
const someString = 'This is some strange string';

function reverse(str) {
    if (typeof (str) !== 'string') {
        return "Ошибка!";
    }

    return str.split('').reverse().join('');
}

console.log(reverse(someString));

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
const joinedCurrencies = baseCurrencies.concat(additionalCurrencies);

function availableCurr(arr, missingCurr) {
    
    if (arr.length === 0) {
        return "Нет доступных валют";
    }
    let result = "Доступные валюты:\n";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === missingCurr) {
            continue;
        }
        result += `${arr[i]}\n`;
    }
    return result;
}

console.log(availableCurr(joinedCurrencies, "EUR"));