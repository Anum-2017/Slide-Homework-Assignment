// Define the Book type
type Book = {
    title: string;
    author: string;
    yearPublished: number;
};

// Define an array of book objects
const books: Book[] = [
    { title: "The Road", author: "Cormac McCarthy", yearPublished: 2006 },
    { title: "Harry Potter and the Goblet of Fire", author: "J.K. Rowling", yearPublished: 2000 },
    { title: "The Da Vinci Code", author: "Dan Brown", yearPublished: 2003 },
    { title: "The Hunger Games", author: " Suzanne Collins", yearPublished: 2008 },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", yearPublished: 1951 }
];

// Function to filter books published after the year 2000
function filterBooksAfter2000(books: Book[]): Book[] {
    return books.filter(book => book.yearPublished > 2000);
}

// Function to search for books by a specific author
function searchBooksByAuthor(books: Book[], author: string): Book[] {
    return books.filter(book => book.author.toLowerCase() === author.toLowerCase());
}

const booksAfter2000 = filterBooksAfter2000(books);
console.log("Books published after 2000:", booksAfter2000);

const booksByRowling = searchBooksByAuthor(books, "J.K. Rowling");
console.log("Books by J.K. Rowling:", booksByRowling);
