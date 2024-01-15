// Exercise 1
// Using async await

//1. fetch yes or no from this api: https://yesno.wtf/api. log out the answer

async function getYesNo() {
    try {
        const responce = await fetch("https://yesno.wtf/api");
        const json = await responce.json();
        console.log('responce', json.answer)
    } catch(error) {
        console.log(error);
    }
}

getYesNo();

// Exercise 5
// Using async await

// Fetch the astronauts
// After the astronauts has been fetched, fetch movies using this api
// Log out the movies

async function austronauts() {
    try {
        const responce = await fetch('http://api.open-notify.org/astros.json');
        const austr = await responce.json();
        console.log(austr.people);

    } catch(error) {
        console.error(error);
    }

   const films= fetchFilms();
}
austronauts();

 async function fetchFilms() {
    try {
        const responce = await fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json');
        const films = await responce.json();
        console.log(films);
        
    } catch (error) {
        console.error(error);
    }
}