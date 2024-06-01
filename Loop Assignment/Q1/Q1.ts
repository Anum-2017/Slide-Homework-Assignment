/* Q1 - Loop through an Array with For-Of 
Create an array of your favorite movies. 
Write a function that uses a for-of loop to print each movie to the console. */

// Array of favorite movies
const favoriteMovies: string[] = [
    "The Shawshank Redemption",
    "The Godfather",
    "Inception",
    "The Dark Knight",
    "Pulp Fiction"
];

// Function to print each movie using a for-of loop
function printFavoriteMovies(movies: string[]): void {
    for (const movie of movies) {
        console.log(movie);
    }
}

// Calling the function to print the favorite movies
printFavoriteMovies(favoriteMovies);
