
// JavaScript function to add a new book to the container
function addBook(coverUrl, title, author, published) {
    var bookContainer = document.getElementById("bookContainer");
    
    var newBook = document.createElement("div");
    newBook.className = "book";
    
    var coverImg = document.createElement("img");
    coverImg.src = coverUrl;
    newBook.appendChild(coverImg);
    
    var titleElem = document.createElement("h2");
    titleElem.innerText = title;
    newBook.appendChild(titleElem);
    
    var authorElem = document.createElement("p");
    authorElem.innerText = "Author: " + author;
    newBook.appendChild(authorElem);
    
    var publishedElem = document.createElement("p");
    publishedElem.innerText = "Published: " + published;
    newBook.appendChild(publishedElem);
    
    bookContainer.appendChild(newBook);
}

 // JavaScript function to add a new book to the container
 function addBook(coverUrl, title, author, published) {
    var bookContainer = document.getElementById("bookContainer");
    
    var newBook = document.createElement("div");
    newBook.className = "book";
    
    var coverImg = document.createElement("img");
    coverImg.src = coverUrl;
    newBook.appendChild(coverImg);
    
    var titleElem = document.createElement("h2");
    titleElem.innerText = title;
    newBook.appendChild(titleElem);
    
    var authorElem = document.createElement("p");
    authorElem.innerText = "Author: " + author;
    newBook.appendChild(authorElem);
    
    var publishedElem = document.createElement("p");
    publishedElem.innerText = "Published: " + published;
    newBook.appendChild(publishedElem);
    
    bookContainer.appendChild(newBook);
}

// Form submission event listener
document.getElementById("addBookForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var coverUrl = document.getElementById("coverUrl").value;
    var title = document.getElementById("title").value;
    var author = document.getElementById("author").value;
    var published = document.getElementById("published").value;
    
    addBook(coverUrl, title, author, published);
    
    // Reset form fields
    document.getElementById("addBookForm").reset();
});