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

function addBookToLibrary() {
    let newBook = new Book()
}