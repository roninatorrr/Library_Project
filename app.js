console.log("Hello World!\n==========\n");

"use strict";

// PROJECT Section
console.log("PROJECT:\n==========\n");

const addBook = document.querySelector("#table");
let button = document.querySelector("#button");
let input = document.querySelector("#library");

class Book {
    constructor(title, author, read, id) {
        this.title = title;
        this.author = author;
        this.read = read;
        this.id = id;
    }
}

class Library {
    constructor(bookCount, books) {
        this.bookCount = bookCount;
        this.books = books;
        this.nextId = 1;
    }
    markRead (checkbox, id) {
        for (const id in this.books) {
            if (this.books == this.id) {
                this.read = true;
                checkbox = true;
            } else {
                disabled = true;
            }
        }
    }

    addBook() {
        const title = document.getElementById("Title");
        const author = document.getElementById("Author");
        const read = document.getElementById("read");
        const addedBook = new Book(title.value, author.value, read.checked, this.nextId);
        this.nextId++;
        const tBody = document.getElementById("libraryTableBody");
        const tRow = document.createElement("tr");
        const addTitle = document.createElement("td");
        const addAuthor = document.createElement("td");
        const newRead = document.createElement("td");
        addTitle.textContent = title.value;
        addAuthor.textContent = author.value;
        const newCheck = document.createElement("input");
        newCheck.setAttribute("type", "checkbox");
        newCheck.checked = read.checked;
        newCheck.disabled = read.checked;
        newRead.appendChild(newCheck);
        tRow.appendChild(addTitle);
        tRow.appendChild(addAuthor);
        tRow.appendChild(newRead);
        tBody.appendChild(tRow);

        this.books.push(addedBook);
        this.bookCount++;

    }
}

let library = new Library(0, []);

button.addEventListener("click", (event) => {
    event.preventDefault();
    library.addBook();
      
});



