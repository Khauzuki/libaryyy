//Declare empty array for library
const myLibrary = [];

//Object constructor
function Book(name) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = this.read;

  //this.info = function(){
  //  return (this.title + this.author + ", " + this.pages)
  //}
}

// Function to display library array to cards
function displayBookOnPage() {
  const books = document.querySelector(".books");

  // Loop over the library array and display to the cards
  myLibrary.forEach((myLibrary) => {
    const card = document.createElement("div");
    card.classList.add("card");
    books.appendChild(card);
    for (let key in myLibrary) {
      console.log(`${key}: ${myLibrary[key]}`);
      const para = document.createElement("p");
      para.textContent = `${key}: ${myLibrary[key]}`;
      card.appendChild(para);
    }
  });
}

//Function for adding book to the array
function addBookToLibrary(title, author, pages, read) {
  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

function createNewBook() {}

function removeBookFromLibrary() {}

function changeBookStatus() {}

console.log("hello");
