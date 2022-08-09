let myLibrary = [];

//dom calls

const bookGrid = document.querySelector(".bookGrid");
const newBookBtn = document.querySelector(".newBook");
const form = document.querySelector("form");
const inputTitle = document.querySelector("#title");
const inputAuthor = document.querySelector("#author");
const inputPages = document.querySelector("#pages");
const add = document.querySelector(".add")

//dom minip

newBookBtn.addEventListener("click", function() {
    form.style.display = "block";
});
add.addEventListener("click", function() {
    form.style.display = "none";
})


class Book{
    constructor(title, author, pages, haveRead) {
        this.title = title
        this.author = author
        this.pages = pages
        this.haveRead = haveRead
    }
};


// takes user input and stores the obj into arr

function addBookToLibrary(title, author, pages, haveRead) {
    let newBook = new Book(title, author, pages, haveRead)
    myLibrary.push(newBook);
    updateHtml();
}

function updateHtml() {
    while(bookGrid.childNodes.length >  0) {
        bookGrid.removeChild(bookGrid.lastChild);
      };
    myLibrary.forEach(x => {
        libraryToHtml(x);
    });
};

function libraryToHtml(book) {
        const div = document.createElement("div");
        const p = document.createElement("p");

        const readButton = document.createElement("button");
        readButton.textContent = "Change Read Status"
        readButton.classList.add("readButton");

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Remove";
        deleteBtn.classList.add("remove");

        p.innerText = `Title: ${book.title} \n Author: ${book.author} \n Number of Pages: ${book.pages} \n Have Read? ${book.haveRead}`;

        div.appendChild(p);
        div.appendChild(readButton);
        div.appendChild(deleteBtn);
        div.class = "gridItem";
        div.classList.add("gridItem");
        bookGrid.appendChild(div);

        readButton.addEventListener("click", () => {
            if(book.haveRead === "No") {
                book.haveRead = "Yes";
            } else {
                book.haveRead = "No";
            };
            updateHtml();
        });

        deleteBtn.addEventListener('click', () => {
            myLibrary.splice(myLibrary.indexOf(book), 1);
            deleteBtn.parentElement.remove();
            updateHtml();
          });
};

function formValues() {
    const inputHaveRead = document.querySelector('input[name="haveRead"]:checked');
    addBookToLibrary(inputTitle.value, inputAuthor.value, inputPages.value, inputHaveRead.value);
};

