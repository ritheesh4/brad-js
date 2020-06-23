// Book Constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI Contructor
function UI() { }

// Add Book To List
UI.prototype.addBookToList = function(book){
    const list = document.getElementById('book-list');
    // Create tr element
    
}

// Event Listeners
document.getElementById('book-form').addEventListener('submit', function (e) {
    // Get form values
    const title =  document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value;

    // Instantiate book
    const book = new Book(title, author, isbn);

    // Instantiate UI
    const ui = new UI();

    console.log(ui);

    // Add book
    ui.addBookToList(book)
    e.preventDefault();
});