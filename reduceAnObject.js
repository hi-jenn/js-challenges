//FIND THE AVERAGE RATING OF MOVIES DIRECTED BY CHRISTOPHER NOLAN- USE REDUCE()

var watchList = [
    {
        "Title": "Inception",
        "Year": "2010",
        "Rated": "PG-13",
        "Released": "16 Jul 2010",
        "Runtime": "148 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
        "imdbRating": "8.8",
        "imdbVotes": "1,446,708",
        "imdbID": "tt1375666",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Interstellar",
        "Year": "2014",
        "Rated": "PG-13",
        "Released": "07 Nov 2014",
        "Runtime": "169 min",
        "Genre": "Adventure, Drama, Sci-Fi",
        "Director": "Christopher Nolan",
        "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        "imdbRating": "8.6",
        "imdbVotes": "910,366",
        "imdbID": "tt0816692",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "The Dark Knight",
        "Year": "2008",
        "Rated": "PG-13",
        "Released": "18 Jul 2008",
        "Runtime": "152 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
        "imdbRating": "9.0",
        "imdbVotes": "1,652,832",
        "imdbID": "tt0468569",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Batman Begins",
        "Year": "2005",
        "Rated": "PG-13",
        "Released": "15 Jun 2005",
        "Runtime": "140 min",
        "Genre": "Action, Adventure",
        "Director": "Christopher Nolan",
        "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
        "imdbRating": "8.3",
        "imdbVotes": "972,584",
        "imdbID": "tt0372784",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Avatar",
        "Year": "2009",
        "Rated": "PG-13",
        "Released": "18 Dec 2009",
        "Runtime": "162 min",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "James Cameron",
        "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        "imdbRating": "7.9",
        "imdbVotes": "876,575",
        "imdbID": "tt0499549",
        "Type": "movie",
        "Response": "True"
    }
];


//USING .FILTER() AND .MAP() AND .REDUCE()
function nolanAvgRating(arr) {
    //create an array of films by Christopher Nolan
    let nolansFilms = arr.filter(film => film.Director === 'Christopher Nolan');
    //retrieve the number of films by Christopher Nolan
    let numberOfNolansFilms = nolansFilms.length;
    //create an array of only ratings of Christopher Nolan's films
    let nolansFilmRatings = nolansFilms.map(film => parseFloat(film.imdbRating));
    //add all the ratings together
    let sumOfRatings = nolansFilmRatings.reduce((acc, rating) => acc + rating, 0);
    //divide the sum of ratings by the number of films
    let avgRating = sumOfRatings / numberOfNolansFilms;
    //return the average ratings
    return avgRating;
};

console.log(nolanAvgRating(watchList));      //Should return 8.675


//ABOVE REFACTORED
function nolanAvgRating2(arr) {
    //create an array of Christopher Nolan's films
    let nolansFilms = arr.filter(film => film.Director === 'Christopher Nolan');
    //create an array of only ratings of those films and all the ratings together
    let sumOfRatings = nolansFilms    
        .map(film => parseFloat(film.imdbRating))
        .reduce((acc, rating) => acc + rating, 0);
    //divide the sum of the ratings by the number of films
    let avgRating = sumOfRatings / nolansFilms.length;
    //return the average of the ratings
    return avgRating;
};

console.log(nolanAvgRating2(watchList));       //Should return 8.675