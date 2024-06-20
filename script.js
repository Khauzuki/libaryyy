const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

function displayBookOnPage() {
  const books = document.querySelector(".books");
  books.innerHTML = "";

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

function handleFormSubmit(event) {
  event.preventDefault();

  const form = event.target;

  const title = form.title.value;
  const author = form.author.value;
  const pages = form.pages.value;
  const read = form.read.checked;

  bookFormContainer.style.display = "none";

  addBookToLibrary(title, author, pages, read);
  displayBookOnPage();

  form.reset();
}

function handleAddBookButtonClick() {
  const bookFormContainer = document.getElementById("bookFormContainer");

  if (
    bookFormContainer.style.display === "none" ||
    bookFormContainer.style.display === ""
  ) {
    bookFormContainer.style.display = "grid";
  } else {
    bookFormContainer.style.display = "none";
  }
}

const form = document.getElementById("bookForm");
form.addEventListener("submit", handleFormSubmit);

const addBookButton = document.getElementById("addBookButton");
addBookButton.addEventListener("click", handleAddBookButtonClick);

document.getElementById("bookFormContainer").style.display = "none";

addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, true);
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, false);
displayBookOnPage();
