const container = document.getElementById('library-container')
const popup = document.getElementById('popup')
const addBook = document.getElementById('add-book')

let myLibrary = [
    {"author": "nabawi",
     "title": "AutoBiography of Bawi",
     "pages": 25,
     "read": true
    },
    {"author": "zahra",
     "title": "AutoBiography of zahra",
     "pages": 29,
     "read": false
    }
]

function Book(author, title, pages, read){
    this.author = author
    this.title = title
    this.pages = pages
    this.read = read
    this.info = function() {
        console.log(`${author} by ${title}, ${pages} pages, read`)
    }
}

const theHobbit = new Book('J.R.R. Tolkien', 'The Hobbit', '295', 'not red yet')
console.log(theHobbit.info())

function openPopup() {
    popup.classList.add("open-popup")
}

function addBookToLibrary() {
    popup.classList.remove("open-popup")
}

function showLibrary(myLibrary) {
    return myLibrary.map(myLibrary => `
    <div class="card">
            <div class="author">
                <div>Author: ${myLibrary.author}</div>
            </div>

            <div class="title">
                <div>Title: ${myLibrary.title}</div>
            </div>

            <div class="pages">
                <div>Pages: ${myLibrary.pages}</div>
            </div>

            <div class="read">
                <div>Read: </div>
                <input type="checkbox">
            </div>
        </div>`).join('') + "</div>";

}

container.innerHTML = showLibrary(myLibrary)