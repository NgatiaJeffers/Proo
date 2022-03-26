import React, { Component } from 'react';
import BookList from './BookList';
import ToogleBookForm from './ToggleBookForm';

class BookDashboard extends Component {
    state = {
        books: [
            {
                id: 1,
                title: "Harry Potter and the Sorcerer's Stone",
                author: "J.K. Rowling",
                description: `Harry Potter has no idea how famous he is.
                            That's because he's being raised by his 
                            miserable aunt and uncle who are terrified 
                            Harry will learn that he's really a wizard, 
                            just as his parents were. But everything 
                            changes when Harry is summoned to attend 
                            an infamous school for wizards, and he 
                            begins to discover some clues about his 
                            illustrious birthright. From the surprising 
                            way he is greeted by a lovable giant, 
                            to the unique curriculum and colorful 
                            faculty at his unusual school, Harry finds 
                            himself drawn deep inside a mystical world 
                            he never knew existed and closer to his own 
                            noble destiny.`,
            },
            {
                id: 2,
                title: "Harry Potter and the Chamber of Secrets",
                author: "J.K. Rowling",
                description: `It is Harry's second year at Hogwarts; not only`
            }
        ]
    }

    // Creating a new book
    createNewBook = (book) => {
        book.id = Math.floor(Math.random() * 100);
        this.setState({ books: [...this.state.books, book] });
    }

    // Update a book
    updateBook = (book) => {
        const newBooks = this.state.books.map(b => {
            if (book.id === newBooks.id) {
                return Object.assign({}, book);
            } else {
                return b;
            }
        });
        this.setState({ books: newBooks });
    }

    // Delete a book
    deleteBook = (id) => {
        this.setState({ books: this.state.books.filter(b => b.id !== id) });
    }


  render() {
    return (
      <main className='d-flex justify-content-center my-4'>
          <div className='col-5'>
                <h1 className='text-center'>Book Store</h1>
                <BookList
                    books={this.state.books}
                    onDelete={this.deleteBook}
                    onUpdate={this.updateBook}
                />
                <ToogleBookForm 
                    onCreate={this.createNewBook} 
                />
          </div>
      </main>
    );
  }
}

export default BookDashboard;