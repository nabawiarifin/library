const container = document.getElementById('library-container')
const popup = document.getElementById('popup')

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

class Book {
    constructor(author, title, pages, read) {
        this.author = author
        this.title = title
        this.pages = pages
        this.read = checked(read)
    }
}

container.innerHTML = showLibrary(myLibrary)

addEventListener("submit", (e) => {
    addBookToLibrary();
    e.preventDefault();
})

function openPopup() {
    popup.classList.add("open-popup")
}

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
    return myLibrary.map((myLibrary, index) => `
    <div class="card" data-index="${index}">
        <button class="remove" onclick="remove(this)">X</button>
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

function remove(e){
    let index = e.parentNode.dataset.index //Get's data attribute from parent class
    delete myLibrary[index]
    container.innerHTML = showLibrary(myLibrary)
}
// for (i of remove) {
//     (function(i) {
//       i.addEventListener('click', function() {
//         console.log(i);
//       });
//     })(i);
//   }