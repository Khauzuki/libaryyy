const myLibrary = []; // Declare empty array for library

function Book(title, author, pages, read) {
  // Object constructor
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  // Function for adding book to the array
  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

function displayBookOnPage() {
  // Function to display library array to cards
  const books = document.querySelector(".books");
  myLibrary.forEach((book) => {
    // Loop over the library array and display to the cards
    const card = document.createElement("div");
    card.classList.add("card");
    books.appendChild(card);
    for (let key in book) {
      console.log(`${key}: ${book[key]}`);
      const para = document.createElement("p");
      para.textContent = `${key}: ${book[key]}`;
      card.appendChild(para);
    }
  });
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "295 pages", "Not Read yet");
addBookToLibrary(
  "To Kill a Mockingbird",
  "Harper Lee",
  "281 pages",
  "Not Read yet"
);
addBookToLibrary("1984", "George Orwell", "328 pages", "Not Read yet");
addBookToLibrary(
  "Pride and Prejudice",
  "Jane Austen",
  "279 pages",
  "Not Read yet"
);
addBookToLibrary(
  "The Great Gatsby",
  "F. Scott Fitzgerald",
  "180 pages",
  "Not Read yet"
);
addBookToLibrary(
  "The Catcher in the Rye",
  "J.D. Salinger",
  "277 pages",
  "Not Read yet"
);

console.log("End of code array contents", myLibrary);

displayBookOnPage();
