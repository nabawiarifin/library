const container = document.getElementById('library-container')
const popup = document.getElementById('popup')
const addBook = document.getElementById('add-book')
const submit = document.getElementById('submit')

let myLibrary = [
    {"author": "nabawi",
     "title": "AutoBiography of Bawi",
     "pages": 25,
     "read": "checked"
    },
    {"author": "zahra",
     "title": "AutoBiography of zahra",
     "pages": 29,
     "read": ""
    }
]

function Book(author, title, pages, read){
    this.author = author
    this.title = title
    this.pages = pages
    this.read = checked(read)
}

container.innerHTML = showLibrary(myLibrary)

function openPopup() {
    popup.classList.add("open-popup")
}

submit.addEventListener("click", function(event) {
    addBookToLibrary();
    event.preventDefault();
})

function addBookToLibrary() {
    const author = document.getElementById('author').value
    const title = document.getElementById('title').value
    const pages = document.getElementById('pages').value
    const read = document.getElementById('read')

    const book = new Book(author, title, pages, read)
    myLibrary.push(book)

    popup.classList.remove("open-popup")
    container.innerHTML = showLibrary(myLibrary)
}

function checked(checkbox){
    if (checkbox.checked){
        return "checked"
    } else {
        return ""
    }
}

function showLibrary(myLibrary) {
    return myLibrary.map(myLibrary => `
    <div class="card">
        <button class="delete">X</button>
        <div class="author">
            <div>${myLibrary.author}</div>
        </div>

        <div class="title">
            <div>${myLibrary.title}</div>
        </div>

        <div class="pages">
            <div>Pages: ${myLibrary.pages}</div>
        </div>

        <div class="read">
            <div>Read: </div>
            <input type="checkbox" ${myLibrary.read}>
        </div>
    </div>`).join('') + "</div>";

}

