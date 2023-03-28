console.log("Hello World!\n==========\n");

"use strict";

// PROJECT Section
console.log("PROJECT:\n==========\n");



class Book {
    constructor(title, author, read) {
        this.title = "title";
        this.author = "author";
        this.read = read;
    }
}

class Library {
    constructor(books) {
        this.bookCount = books.length;
        this.books = books;
    }
    markRead (checkbox, id) {
        for (const id in Library) {
            if (this.books == this.read) {
                checkbox = true;
            } else {
                disabled = true;
            }

        }
    }

    addBook() {
        const title = document.getElementById("bookTitle");
        const author = document.getElementById("bookAuthor");
        const read = document.getElementById("bookRead");
        const addedBook = (title.value, author.value, read.checked);
        const tBody = document.getElementById("tableBody");
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
        bookCount++;
    }

}


const addBook = document.querySelector("#addBook");

const lib = document.querySelector("#addBook");
const btn = document.querySelector("#click");
btn && btn.addEventListener("click", addBook);









